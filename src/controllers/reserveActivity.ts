import { RequestHandler } from "express";
import prisma from "../prisma";

const reserveActivity: RequestHandler = async (req, res) => {
  const { userID, activityID } = req.body;

  // แปลง activityID เป็นตัวเลข
  const parsedActivityID = parseInt(activityID, 10);  // ใช้ parseInt แปลงจาก string เป็น number

  // ตรวจสอบข้อมูลที่ได้รับ
  console.log(req.body);

  // ตรวจสอบว่า userID และ activityID มีหรือไม่
  if (!userID || isNaN(parsedActivityID)) {
    return res.status(400).send({
      message: "ข้อมูลไม่ถูกต้อง",
    });
  }

  try {
    // ตรวจสอบว่ามีการจองกิจกรรมนี้หรือไม่
    const existingReservation = await prisma.activityResults.findFirst({
      where: {
        UserID: userID,
        ActivityID: parsedActivityID, // ใช้ parsedActivityID ที่เป็น number
        IsArchived: false, // ตรวจสอบว่าไม่ได้ถูกลบหรือเก็บข้อมูลแล้ว
      },
    });

    if (existingReservation) {
      return res.status(400).send({
        message: "คุณได้จองกิจกรรมนี้ไปแล้ว",
      });
    }

    // บันทึกการจอง
    await prisma.activityResults.create({
      data: {
        User: {
          connect: {
            UserID: userID,
          },
        },
        Activity: {
          connect: {
            ID: parsedActivityID, // ใช้ parsedActivityID ที่เป็น number
          },
        },
        Reservation: true,
        Status: "RESERVED",
        Department: {
          connect: {
            DepartmentID: "IT",
          },
        },
      },
    });

    // ส่ง response หลังจากบันทึกสำเร็จ
    res.status(201).send({ message: "จองกิจกรรมสำเร็จ" });

  } catch (error) {
    console.error("Error reserving activity:", error);
    res.status(500).send({
      message: "เกิดข้อผิดพลาดในการจองกิจกรรม",
    });
  }
};

export default reserveActivity;
