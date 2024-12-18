// controllers/getUserDetails.ts
import { RequestHandler } from "express";
import prisma from "../prisma";
const getUserDetails: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await prisma.user.findUnique({
      where: { UserID: id },
      include: {
        Department: true,
        ActivityResults: {
          where: { IsArchived: false },
          include: {
            Activity: true
          }
        }
      }
    });

    if (!user) {
      return res.status(404).json({ message: "ไม่พบผู้ใช้" });
    }

    res.json({ user });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: "เกิดข้อผิดพลาด" });
  }
};

export default getUserDetails;
