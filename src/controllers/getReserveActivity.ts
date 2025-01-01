// controllers/getReserveActivity.ts
import { RequestHandler } from "express";
import prisma from "../prisma";

const getBookedActivities: RequestHandler = async (req, res) => {
  const { userID } = req.params;

  try {
    // ดึงข้อมูล ActivityResults พร้อมกับ Activity
    const activities = await prisma.activityResults.findMany({
      where: {
        UserID: userID,
        IsArchived: false
      },
      include: {
        Activity: true
      }
    });

    // ดึงข้อมูล ActivityDetails สำหรับแต่ละกิจกรรม
    const activitiesWithDetails = await Promise.all(
      activities.map(async (result) => {
        // ค้นหา ActivityDetails ที่มีอยู่
        let details = await prisma.activityDetails.findFirst({
          where: {
            ActivityID: result.ActivityID,
            UserID: userID,
            IsArchived: false
          }
        });

        // ถ้าไม่มี details ให้สร้างใหม่
        if (!details) {
          details = await prisma.activityDetails.create({
            data: {
              ActivityID: result.ActivityID,
              UserID: userID,
              Details: '',
              IsApproved: false, // เปลี่ยนจาก null เป็น false
            }
          });
        }

        // จัดรูปแบบข้อมูล
        return {
          id: result.ActivityID,
          name: result.Activity.Title,
          date: new Date(result.Activity.StartDate).toLocaleDateString('th-TH'),
          location: result.Activity.Location || 'ไม่ระบุสถานที่',
          status: result.Status,
          score: result.Activity.Score,
          images: result.Activity.Images as string[],
          details: {
            id: details.ID,
            details: details.Details,
            isApproved: details.IsApproved === undefined ? false : details.IsApproved,
            reviewNote: details.ReviewNote
          }
        };
      })
    );

    res.json(activitiesWithDetails);
  } catch (error) {
    console.error('Error fetching booked activities:', error);
    res.status(500).json({ message: 'เกิดข้อผิดพลาดในการดึงข้อมูลกิจกรรม' });
  }
};

export default getBookedActivities;
