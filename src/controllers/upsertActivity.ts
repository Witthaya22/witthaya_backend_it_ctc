// controllers/upsertActivity.ts
import { RequestHandler } from "express";
import prisma from "../prisma";

const upsertActivity: RequestHandler = async (req, res) => {
  try {
    const {
      id,
      title,
      description,
      score,
      startDate,
      endDate,
      type,
      location,
      maxParticipants,
      semesterId,  // เพิ่ม semesterId
    } = req.body;

    const files = req.files as Express.Multer.File[];

    // ตรวจสอบว่ามี semesterId หรือไม่
    if (!semesterId) {
      return res.status(400).json({
        message: "กรุณาระบุภาคเรียน",
      });
    }

    // ตรวจสอบว่า semester มีอยู่จริง
    const semester = await prisma.semester.findUnique({
      where: {
        ID: parseInt(semesterId),
        IsArchived: false,
      },
    });

    if (!semester) {
      return res.status(404).json({
        message: "ไม่พบข้อมูลภาคเรียน",
      });
    }

    // Prepare images array
    const images = files
      ? files.map((file) => `/uploads/activities/${file.filename}`)
      : [];

    if (id) {
      // Update existing activity
      const activity = await prisma.activity.update({
        where: {
          ID: parseInt(id),
        },
        data: {
          Title: title,
          Description: description,
          Score: parseInt(score),
          StartDate: new Date(startDate),
          EndDate: new Date(endDate),
          Type: type,
          Location: location,
          MaxParticipants: maxParticipants ? parseInt(maxParticipants) : null,
          Images: images.length > 0 ? images : undefined,
          SemesterID: parseInt(semesterId),  // เพิ่ม SemesterID
          UpdatedAt: new Date(),
        },
      });

      return res.json({
        message: "แก้ไขกิจกรรมสำเร็จ",
        activity,
      });
    }

    // Create new activity
    const activity = await prisma.activity.create({
      data: {
        Title: title,
        Description: description,
        Score: parseInt(score),
        StartDate: new Date(startDate),
        EndDate: new Date(endDate),
        Type: type,
        Location: location,
        MaxParticipants: maxParticipants ? parseInt(maxParticipants) : null,
        Images: images,
        SemesterID: parseInt(semesterId),  // เพิ่ม SemesterID
        CreatedAt: new Date(),
        UpdatedAt: new Date(),
      },
    });

    return res.json({
      message: "สร้างกิจกรรมสำเร็จ",
      activity,
    });
  } catch (error) {
    console.error("Error upserting activity:", error);
    return res.status(500).json({
      message: "เกิดข้อผิดพลาดในการสร้าง/แก้ไขกิจกรรม",
    });
  }
};

export default upsertActivity;
