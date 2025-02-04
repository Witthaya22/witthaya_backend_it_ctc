// controllers/getActivityParticipants.ts
import { RequestHandler } from "express";
import prisma from "../prisma";

export const getActivityParticipants: RequestHandler = async (req, res) => {
  try {
    const { id: activityId } = req.params;

    // Query activityResults with related data
    const participants = await prisma.activityResults.findMany({
      where: {
        ActivityID: parseInt(activityId),
        IsArchived: false,
      },
      include: {
        Department: true, // Include Department directly
        User: true,     // Include User directly
      }
    });

    // Transform data to match frontend structure
    const transformedParticipants = participants.map(result => ({
      id: result.ID,
      userId: result.UserID,
      name: `${result.User.UserFirstName} ${result.User.UserLastName}`,
      department: result.Department.Name, // Use the correct field name from your schema
      status: result.Status,
      reservationDate: result.CreatedAt,
      activityResults: {
        id: result.ID,
        status: result.Status,
        imageActivity: result.imageActivity
      }
    }));

    return res.json({
      participants: transformedParticipants
    });
  } catch (error) {
    console.error("Error fetching participants:", error);
    return res.status(500).json({
      message: "เกิดข้อผิดพลาดในการดึงข้อมูลผู้เข้าร่วม"
    });
  }
};

export default getActivityParticipants;
