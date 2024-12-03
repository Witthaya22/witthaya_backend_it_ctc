import { RequestHandler } from "express";
import prisma from "../prisma";

const getAllUsers: RequestHandler = async (req, res) => {
  try {
    const users = await prisma.user.findMany({
      where: {
        IsArchived: false // เพิ่มเงื่อนไขนี้
      },
      orderBy: {
        UserID: 'desc'
      }
    });

    res.json({ users });
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ message: 'เกิดข้อผิดพลาดในการดึงข้อมูลผู้ใช้' });
  }
};

export default getAllUsers;
