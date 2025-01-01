// controllers/activityDetails.ts
import { RequestHandler } from "express";
import prisma from "../prisma";


// Get activity details for a specific activity and user
export const getActivityDetails: RequestHandler = async (req, res) => {
  const { activityId, userId } = req.params;

  try {
    const activityDetails = await prisma.activityDetails.findFirst({
      where: {
        ActivityID: parseInt(activityId),
        UserID: userId,
        IsArchived: false,
      },
      include: {
        User: {
          select: {
            UserFirstName: true,
            UserLastName: true,
            Department: {
              select: {
                Name: true,
              },
            },
          },
        },
        Activity: {
          select: {
            Title: true,
            Type: true,
          },
        },
      },
    });

    // สร้าง ActivityDetails ใหม่ถ้ายังไม่มี
    if (!activityDetails) {
      const newActivityDetails = await prisma.activityDetails.create({
        data: {
          ActivityID: parseInt(activityId),
          UserID: userId,
          Details: '',
          // ไม่ต้องกำหนดค่า IsApproved เริ่มต้น ให้เป็น null
        },
      });
      return res.json({ details: newActivityDetails });
    }

    res.json({ details: activityDetails });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'เกิดข้อผิดพลาดในการดึงข้อมูล' });
  }
};
// Create or update activity details
export const upsertActivityDetails: RequestHandler = async (req, res) => {
  const { activityId, userId } = req.params;
  const { details } = req.body;

  try {
    const activityDetails = await prisma.activityDetails.upsert({
      where: {
        ID: parseInt(activityId),
        UserID: userId,
      },
      update: {
        Details: details,
        UpdatedAt: new Date(),
      },
      create: {
        ActivityID: parseInt(activityId),
        UserID: userId,
        Details: details,
      },
    });

    res.json({
      message: 'บันทึกรายละเอียดกิจกรรมเรียบร้อยแล้ว',
      details: activityDetails
    });
  } catch (error) {
    console.error('Error upserting activity details:', error);
    res.status(500).json({ message: 'เกิดข้อผิดพลาดในการบันทึกรายละเอียดกิจกรรม' });
  }
};

// Review activity details (admin only)
export const reviewActivityDetails: RequestHandler = async (req, res) => {
  const { detailId } = req.params;
  const { isApproved, reviewNote, reviewedBy } = req.body;

  try {
    // ดึงข้อมูล ActivityDetails เดิมก่อน
    const currentDetails = await prisma.activityDetails.findUnique({
      where: {
        ID: parseInt(detailId),
      },
    });

    if (!currentDetails) {
      return res.status(404).json({ message: 'ไม่พบข้อมูลกิจกรรม' });
    }

    // อัพเดท ActivityResults ก่อน
    const activityResult = await prisma.activityResults.findFirst({
      where: {
        ActivityID: currentDetails.ActivityID,
        UserID: currentDetails.UserID,
      },
    });

    if (activityResult) {
      await prisma.activityResults.update({
        where: {
          ID: activityResult.ID,
        },
        data: {
          Status: isApproved ? 'completed' : 'failed',
          UpdatedAt: new Date(),
        },
      });
    }

    // อัพเดท ActivityDetails
    const updatedDetails = await prisma.activityDetails.update({
      where: {
        ID: parseInt(detailId),
      },
      data: {
        IsApproved: isApproved,
        ReviewNote: reviewNote,
        ReviewedBy: reviewedBy,
        UpdatedAt: new Date(),
      },
    });

    res.json({
      message: `${isApproved ? 'ผ่าน' : 'ไม่ผ่าน'}กิจกรรมเรียบร้อยแล้ว`,
      details: updatedDetails,
    });
  } catch (error) {
    console.error('Error reviewing activity details:', error);
    res.status(500).json({
      message: 'เกิดข้อผิดพลาดในการอัพเดทสถานะ',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
};

// Get all activity details for review (admin only)
export const getAllActivityDetailsForReview: RequestHandler = async (req, res) => {
  try {
    const activityDetails = await prisma.activityDetails.findMany({
      where: {
        IsArchived: false,
      },
      include: {
        User: {
          select: {
            UserFirstName: true,
            UserLastName: true,
            Department: {
              select: {
                Name: true,
              },
            },
          },
        },
        Activity: {
          select: {
            Title: true,
            Type: true,
          },
        },
      },
      orderBy: {
        CreatedAt: 'desc',
      },
    });

    const formattedDetails = activityDetails.map(detail => ({
      id: detail.ID,
      activityTitle: detail.Activity.Title,
      activityType: detail.Activity.Type,
      userName: `${detail.User.UserFirstName} ${detail.User.UserLastName}`,
      department: detail.User.Department.Name,
      details: detail.Details,
      isApproved: detail.IsApproved,
      reviewedBy: detail.ReviewedBy,
      reviewNote: detail.ReviewNote,
      createdAt: detail.CreatedAt,
      updatedAt: detail.UpdatedAt,
    }));

    res.json({ details: formattedDetails });
  } catch (error) {
    console.error('Error fetching activity details for review:', error);
    res.status(500).json({ message: 'เกิดข้อผิดพลาดในการดึงข้อมูลรายละเอียดกิจกรรมทั้งหมด' });
  }
};
