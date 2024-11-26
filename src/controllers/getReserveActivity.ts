// controller/getReserveActivity.ts
import { RequestHandler } from "express";
import prisma from "../prisma";

const getBookedActivities: RequestHandler = async (req, res) => {
  const { userID } = req.params; // รับ userID จาก URL parameter

  try {
    // ดึงกิจกรรมที่ผู้ใช้จองไว้จาก ActivityResults
    const bookedActivities = await prisma.activityResults.findMany({
      where: {
        UserID: userID,
        IsArchived: false, // กรองกิจกรรมที่ยังไม่ถูกเก็บ
        Reservation: true, // เฉพาะกิจกรรมที่ถูกจอง
      },
      include: {
        Activity: { // รวมข้อมูลกิจกรรม
          select: {
            ID: true,
            Title: true,
            StartDate: true,
            Location: true,
            Score: true,
            Images: true,
          }
        },
      },
    });

    if (!bookedActivities.length) {
      return res.status(404).json({ message: "ไม่พบกิจกรรมที่จองไว้" });
    }

    // ส่งข้อมูลกิจกรรมที่จองกลับไปยัง frontend
    const activities = bookedActivities.map(activityResult => ({
      id: activityResult.Activity.ID,
      name: activityResult.Activity.Title,
      date: activityResult.Activity.StartDate.toLocaleDateString(), // แปลงเป็นวันที่
      location: activityResult.Activity.Location,
      status: activityResult.Status === 'RESERVED' ? 'booking' : activityResult.Status.toLowerCase(),
      score: activityResult.Activity.Score,
      images: activityResult.Activity.Images
    }));

    return res.status(200).json(activities);

  } catch (error) {
    console.error("Error fetching booked activities:", error);
    res.status(500).json({ message: "เกิดข้อผิดพลาดในการดึงข้อมูลกิจกรรม" });
  }
};

export default getBookedActivities;
