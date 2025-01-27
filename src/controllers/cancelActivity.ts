// controllers/check-in.post.ts
import { RequestHandler } from "express";
import prisma from "../prisma";

const checkInActivity: RequestHandler = async (req, res) => {
  const { activityId, userId, checkInCode } = req.body;

  if (!activityId || !userId || !checkInCode) {
    return res.status(400).send({
      message: "ข้อมูลไม่ครบถ้วน"
    });
  }

  try {
    // ตรวจสอบการลงทะเบียน
    const registration = await prisma.activityResults.findFirst({
      where: {
        ActivityID: activityId,
        UserID: userId,
        IsArchived: false,
        Status: "RESERVED" // เช็คว่าต้องมีการจองก่อน
      }
    });

    if (!registration) {
      return res.status(404).send({
        message: "ไม่พบข้อมูลการลงทะเบียน"
      });
    }

    // เช็คว่าเช็คอินไปแล้วหรือยัง
    if (registration.Status === "completed") {
      return res.status(400).send({
        message: "เช็คอินไปแล้ว"
      });
    }

    // อัพเดทสถานะ
    const result = await prisma.activityResults.update({
      where: {
        ID: registration.ID
      },
      data: {
        Status: "completed",
        UpdatedAt: new Date()
      }
    });

    return res.status(200).send({
      success: true,
      message: "เช็คอินสำเร็จ",
      result
    });

  } catch (error) {
    console.error("Check-in error:", error);
    return res.status(500).send({
      message: "เกิดข้อผิดพลาดในการเช็คอิน"
    });
  }
};

export default checkInActivity;
