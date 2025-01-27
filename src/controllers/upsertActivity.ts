// src/controllers/upsertActivity.ts
import { RequestHandler } from "express";
import prisma from "../prisma";
import fs from 'fs/promises';
import path from 'path';

const upsertActivity: RequestHandler = async (req, res) => {
  try {
    const {
      title,
      description,
      score,
      location,
      startDate,
      endDate,
      type,
      maxParticipants
    } = req.body;

    // Validation
    if (!title || !description || !startDate || !endDate || isNaN(Number(score))) {
      return res.status(400).json({
        message: "กรุณากรอกข้อมูลที่จำเป็นให้ครบถ้วน",
      });
    }

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

    // Process uploaded files
    const files = (req.files as Express.Multer.File[]) || [];
    const imageUrls = files.map(file => `/uploads/activities/${file.filename}`);

    const basePayload = {
      Title: title.trim(),
      Description: description.trim(),
      Score: Number(score),
      StartDate: startDateTime,
      EndDate: endDateTime,
      Type: type?.trim() || 'GENERAL',
      Location: location?.trim() || null,
      MaxParticipants: maxParticipants ? Number(maxParticipants) : null,
      IsArchived: false
    };

    if (req.query.id) {
      const activityId = parseInt(req.query.id as string);
      const existingActivity = await prisma.activity.findUnique({
        where: {
          ID: activityId,
          IsArchived: false
        }
      });

      if (!existingActivity) {
        // Delete uploaded files if activity not found
        await Promise.all(files.map(file =>
          fs.unlink(file.path).catch(() => {})
        ));
        return res.status(404).json({
          message: "ไม่พบกิจกรรมที่ต้องการแก้ไข"
        });
      }

     const updatePayload: any = {
       ...basePayload,
       UpdatedAt: new Date()
     };

     // Update images if new files uploaded
     if (files.length > 0) {
       // Delete old images
       if (existingActivity.Images) {
         await Promise.all((existingActivity.Images as string[]).map(async (oldImage) => {
           const filePath = path.join(process.cwd(), "public", oldImage);
           await fs.unlink(filePath).catch(() => {});
         }));
       }
       updatePayload.Images = imageUrls;
     }

      await prisma.activity.update({
        where: { ID: activityId },
        data: updatePayload
      });

      res.status(200).json({
        message: "อัปเดตกิจกรรมสำเร็จ"
      });

    } else {
      const createPayload = {
        ...basePayload,
        Images: imageUrls,
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

    if (error.code === 'P2002') {
      return res.status(400).json({
        message: "มีข้อมูลซ้ำในระบบ"
      });
    }

    res.status(500).json({
      message: "เกิดข้อผิดพลาดในการดำเนินการ",
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};

export default upsertActivity;
