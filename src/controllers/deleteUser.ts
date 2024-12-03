import { RequestHandler } from "express";
import prisma from "../prisma";

const deleteUser: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params;

    // ตรวจสอบว่ามีผู้ใช้นี้อยู่จริง
    const user = await prisma.user.findUnique({
      where: { UserID: id },
    });

    if (!user) {
      return res.status(404).json({
        message: "ไม่พบผู้ใช้นี้ในระบบ",
      });
    }

    // Soft delete โดยการ update IsArchived
    await prisma.user.update({
      where: { UserID: id },
      data: { IsArchived: true },
    });

    res.status(200).json({
      message: "ลบผู้ใช้สำเร็จ",
    });
  } catch (error) {
    console.error("เกิดข้อผิดพลาดในการลบผู้ใช้:", error);
    res.status(500).json({
      message: "เกิดข้อผิดพลาดในการลบผู้ใช้",
    });
  }
};

export default deleteUser;
