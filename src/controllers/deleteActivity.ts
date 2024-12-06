import { RequestHandler } from "express";
import prisma from "../prisma";

const deleteActivity: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params;

    // ตรวจสอบว่ามีกิจกรรมนี้อยู่จริง
    const activity = await prisma.activity.findUnique({
      where: { ID: parseInt(id) },
    });

    if (!activity) {
      return res.status(404).json({
        message: "ไม่พบกิจกรรมนี้ในระบบ",
      });
    }

    // Soft delete โดยการ update IsArchived
    await prisma.activity.update({
      where: { ID: parseInt(id) },
      data: { IsArchived: true }
    });

    res.status(200).json({
      message: "ลบกิจกรรมสำเร็จ",
    });
  } catch (error) {
    console.error("เกิดข้อผิดพลาดในการลบกิจกรรม:", error);
    res.status(500).json({
      message: "เกิดข้อผิดพลาดในการลบกิจกรรม",
    });
  }
};

export default deleteActivity;
