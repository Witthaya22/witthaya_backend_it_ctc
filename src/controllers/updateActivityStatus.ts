// controllers/updateActivityStatus.ts
import { RequestHandler } from "express";
import prisma from "../prisma";

export const updateActivityStatus: RequestHandler = async (req, res) => {
  const { activityId, userId } = req.params;
  const { status, note } = req.body;

  try {
    const activity = await prisma.activity.findUnique({
      where: { ID: parseInt(activityId) }
    });

    if (!activity) {
      return res.status(404).json({ message: 'ไม่พบกิจกรรม' });
    }

    // อัพเดท ActivityResults
    await prisma.activityResults.updateMany({
      where: {
        ActivityID: parseInt(activityId),
        UserID: userId
      },
      data: { Status: status }
    });

    // อัพเดท ActivityDetails
    const detail = await prisma.activityDetails.findFirst({
      where: {
        ActivityID: parseInt(activityId),
        UserID: userId,
      }
    });

    if (detail) {
      await prisma.activityDetails.update({
        where: { ID: detail.ID },
        data: {
          IsApproved: status === 'completed',
          ReviewNote: note
        }
      });
    }

    res.json({ message: 'อัพเดทสถานะสำเร็จ' });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'เกิดข้อผิดพลาด' });
  }
};
