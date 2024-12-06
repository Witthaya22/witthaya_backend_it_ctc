import { RequestHandler } from "express";
import prisma from "../prisma";

const getAllActivity: RequestHandler = async (req, res) => {
  try {
    const activities = await prisma.activity.findMany({
      where: {
        IsArchived: false  // เพิ่มเงื่อนไขนี้
      },
      orderBy: {
        ID: 'desc'
      }
    });

    res.json({ activities });
  } catch (error) {
    console.error('Error fetching activities:', error);
    res.status(500).json({
      message: 'เกิดข้อผิดพลาดในการดึงข้อมูลกิจกรรม'
    });
  }
};

export default getAllActivity;
