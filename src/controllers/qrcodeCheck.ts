import { RequestHandler } from "express";
import prisma from "../prisma";

interface QRCodeData {
  activityId: number;
  userId: string;
  timestamp: string;
  type: 'activity-check-in' | 'activity-check-out';
}

const handleActivityCheckIn: RequestHandler = async (req, res) => {
  try {
    const qrData: QRCodeData = req.body;

    // Validate QR code data
    if (!qrData.activityId || !qrData.userId || !qrData.timestamp) {
      return res.status(400).json({ message: "ข้อมูล QR code ไม่ถูกต้อง" });
    }

    // Check if user has booked this activity
    const activityResult = await prisma.activityResults.findFirst({
      where: {
        UserID: qrData.userId,
        ActivityID: qrData.activityId,
        Reservation: true,
        IsArchived: false
      }
    });

    if (!activityResult) {
      return res.status(404).json({ message: "ไม่พบการจองกิจกรรมนี้" });
    }

    // Update only Status field
    const updatedActivity = await prisma.activityResults.update({
      where: {
        ID: activityResult.ID
      },
      data: {
        Status: qrData.type === 'activity-check-in' ? 'CHECKED_IN' : 'COMPLETED'
        // UpdatedAt will be automatically handled by @updatedAt
      }
    });

    res.status(200).json({
      message: qrData.type === 'activity-check-in' ?
        "เช็คอินสำเร็จ" : "เช็คเอาท์สำเร็จ",
      data: updatedActivity
    });

  } catch (error) {
    console.error("Error handling activity check-in:", error);
    res.status(500).json({
      message: "เกิดข้อผิดพลาดในการเช็คอิน/เช็คเอาท์"
    });
  }
};

export default handleActivityCheckIn;
