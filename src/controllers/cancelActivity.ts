import { RequestHandler } from "express";
import prisma from "../prisma";

const cancelActivity: RequestHandler = async (req, res) => {
  const { userID, activityID } = req.body;

  // Validate input
  if (!userID || !activityID) {
    return res.status(400).send({
      message: "กรุณาระบุ userID และ activityID",
    });
  }

  try {
    // Find the existing reservation
    const existingReservation = await prisma.activityResults.findFirst({
      where: {
        UserID: userID,
        ActivityID: activityID,
        Status: "RESERVED", // Only allow cancellation of reserved activities
        IsArchived: false,
      },
    });

    if (!existingReservation) {
      return res.status(404).send({
        message: "ไม่พบข้อมูลการจองกิจกรรม หรือไม่สามารถยกเลิกได้",
      });
    }

    // Update the reservation status to CANCELLED
    await prisma.activityResults.update({
      where: {
        ID: existingReservation.ID,
      },
      data: {
        Status: "CANCELLED",
        IsArchived: true,
        UpdatedAt: new Date(),
      },
    });

    return res.status(200).send({
      message: "ยกเลิกการจองกิจกรรมสำเร็จ",
    });
  } catch (error) {
    console.error("Error cancelling activity:", error);
    return res.status(500).send({
      message: "เกิดข้อผิดพลาดในการยกเลิกการจองกิจกรรม",
    });
  }
};

export default cancelActivity;
