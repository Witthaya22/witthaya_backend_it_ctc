import { RequestHandler } from "express";
import prisma from "../prisma";

const upsertActivity: RequestHandler = async (req, res) => {
  try {
    const {
      title,
      description,
      images,
      score,
      location,
      startDate,
      endDate,
      type,
      maxParticipants
    } = req.body;

    // การตรวจสอบข้อมูลที่จำเป็น
    if (!title || !description || !startDate || !endDate || typeof score !== "number") {
      return res.status(400).json({
        message: "กรุณากรอกข้อมูลที่จำเป็นให้ครบถ้วน",
      });
    }

    // ตรวจสอบรูปแบบวันที่
    const startDateTime = new Date(startDate);
    const endDateTime = new Date(endDate);

    if (isNaN(startDateTime.getTime()) || isNaN(endDateTime.getTime())) {
      return res.status(400).json({
        message: "รูปแบบวันที่ไม่ถูกต้อง",
      });
    }

    if (endDateTime < startDateTime) {
      return res.status(400).json({
        message: "วันที่สิ้นสุดต้องมาหลังวันที่เริ่มต้น",
      });
    }

    // สร้าง base payload
    const basePayload = {
      Title: title.trim(),
      Description: description.trim(),
      Score: score,
      StartDate: startDateTime,
      EndDate: endDateTime,
      Type: type?.trim() || 'GENERAL',
      Location: location?.trim() || null,
      MaxParticipants: maxParticipants || null,
      IsArchived: false
    };

    if (req.query.id) {
      // กรณีแก้ไข
      const activityId = parseInt(req.query.id as string);

      // ตรวจสอบว่ากิจกรรมมีอยู่จริง
      const existingActivity = await prisma.activity.findUnique({
        where: {
          ID: activityId,
          IsArchived: false
        }
      });

      if (!existingActivity) {
        return res.status(404).json({
          message: "ไม่พบกิจกรรมที่ต้องการแก้ไข"
        });
      }

      // สร้าง update payload จากข้อมูลที่ส่งมาเท่านั้น
      const updatePayload: any = {};

      if (title) updatePayload.Title = title.trim();
      if (description) updatePayload.Description = description.trim();
      if (images) updatePayload.Images = images;
      if (typeof score === 'number') updatePayload.Score = score;
      if (startDate) updatePayload.StartDate = startDateTime;
      if (endDate) updatePayload.EndDate = endDateTime;
      if (type) updatePayload.Type = type.trim();
      if (location) updatePayload.Location = location.trim();
      if (maxParticipants !== undefined) updatePayload.MaxParticipants = maxParticipants;

      updatePayload.UpdatedAt = new Date();

      // อัพเดทข้อมูล
      await prisma.activity.update({
        where: { ID: activityId },
        data: updatePayload
      });

      res.status(200).json({
        message: "อัปเดตกิจกรรมสำเร็จ"
      });

    } else {
      // กรณีสร้างใหม่
      const createPayload = {
        ...basePayload,
        Images: images || [],
        CreatedAt: new Date(),
        UpdatedAt: new Date()
      };

      const newActivity = await prisma.activity.create({
        data: createPayload
      });

      res.status(201).json({
        message: "เพิ่มกิจกรรมสำเร็จ",
        activityId: newActivity.ID,
        activity: newActivity
      });
    }

  } catch (error: any) {
    console.error("เกิดข้อผิดพลาด:", error);

    // ตรวจสอบ error ที่เกิดจาก Prisma
   // ตรวจสอบ error ที่เกิดจาก Prisma
   if (error.code === 'P2002') {
     return res.status(400).json({
       message: "มีข้อมูลซ้ำในระบบ"
     });
   }

   if (error instanceof Error) {
     res.status(500).json({
       message: "เกิดข้อผิดพลาดในการดำเนินการ",
       error: process.env.NODE_ENV === 'development' ? error.message : undefined
     });
   } else {
     res.status(500).json({
       message: "เกิดข้อผิดพลาดในการดำเนินการ",
       error: process.env.NODE_ENV === 'development' ? String(error) : undefined
     });
   }
  }
};

export default upsertActivity;
