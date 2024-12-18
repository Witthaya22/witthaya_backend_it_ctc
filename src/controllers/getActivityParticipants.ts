// controllers/getActivityParticipants.ts
import { RequestHandler } from "express";
import prisma from "../prisma";

const getActivityParticipants: RequestHandler = async (req, res) => {
  const { id } = req.params;

  try {
    const participants = await prisma.activityResults.findMany({
      where: {
        ActivityID: parseInt(id),
        IsArchived: false
      },
      include: {
        User: {
          select: {
            UserID: true,
            UserFirstName: true,
            UserLastName: true,
            DepartmentID: true,
            Department: {
              select: {
                Name: true
              }
            }
          }
        }
      }
    });

    const formattedParticipants = participants.map(p => ({
      id: p.ID,
      userId: p.User.UserID,
      name: `${p.User.UserFirstName} ${p.User.UserLastName}`,
      department: p.User.Department.Name,
      status: p.Status,
      reservationDate: p.CreatedAt
    }));

    res.json({ participants: formattedParticipants });
  } catch (error) {
    console.error('Error fetching activity participants:', error);
    res.status(500).json({ message: 'เกิดข้อผิดพลาดในการดึงข้อมูลผู้เข้าร่วมกิจกรรม' });
  }
};

export default getActivityParticipants;
