import { RequestHandler } from "express";
import prisma from "../prisma";

const reserveActivity: RequestHandler = async (req, res) => {
  const { userID, activityID } = req.body;
  const parsedActivityID = parseInt(activityID, 10);

  if (!userID || isNaN(parsedActivityID)) {
    return res.status(400).send({
      message: "ข้อมูลไม่ถูกต้อง",
    });
  }

  try {
    // ตรวจสอบข้อมูลผู้ใช้และแผนก
    const user = await prisma.user.findUnique({
      where: {
        UserID: userID
      }
    });

    if (!user) {
      return res.status(404).send({
        message: "ไม่พบข้อมูลผู้ใช้",
      });
    }

    // ตรวจสอบการจองซ้ำ
    const existingReservation = await prisma.activityResults.findFirst({
      where: {
        UserID: userID,
        ActivityID: parsedActivityID,
        IsArchived: false,
      },
    });

    if (existingReservation) {
      return res.status(400).send({
        message: "คุณได้จองกิจกรรมนี้ไปแล้ว",
      });
    }

    // บันทึกการจองโดยใช้แผนกของผู้ใช้
    await prisma.activityResults.create({
      data: {
        User: {
          connect: {
            UserID: userID,
          },
        },
        Activity: {
          connect: {
            ID: parsedActivityID,
          },
        },
        Reservation: true,
        Status: "RESERVED",
        Department: {
          connect: {
            DepartmentID: user.DepartmentID, // ใช้แผนกจากข้อมูลผู้ใช้
          },
        },
      },
    });

    res.status(201).send({ message: "จองกิจกรรมสำเร็จ" });
  } catch (error) {
    console.error("Error reserving activity:", error);
    res.status(500).send({
      message: "เกิดข้อผิดพลาดในการจองกิจกรรม",
    });
  }
};

export default reserveActivity;
