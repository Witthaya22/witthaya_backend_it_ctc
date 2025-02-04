import { RequestHandler } from "express";
import prisma from "../prisma";
import multer from "multer";
import path from "path";
import fs from "fs";

// Configure multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = "public/uploads/proofs";
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, `proof-${uniqueSuffix}${path.extname(file.originalname)}`);
  },
});

// Configure multer upload
const upload = multer({
  storage,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB limit
  },
  fileFilter: (req, file, cb) => {
    const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];
    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Invalid file type. Only JPEG, PNG and JPG are allowed."));
    }
  },
}).single("proofImage");

// Handle file upload errors
const handleUploadImage: RequestHandler = (req, res, next) => {
  upload(req, res, (err) => {
    if (err instanceof multer.MulterError) {
      if (err.code === "LIMIT_FILE_SIZE") {
        return res.status(400).json({
          message: "ไฟล์มีขนาดใหญ่เกินไป กรุณาอัพโหลดไฟล์ขนาดไม่เกิน 5MB",
        });
      }
      return res.status(400).json({ message: err.message });
    } else if (err) {
      return res.status(400).json({ message: err.message });
    }
    next();
  });
};

// Upload proof image controller
export const uploadProof: RequestHandler = async (req, res) => {
  try {
    const { activityId, userId } = req.body;

    if (!req.file) {
      return res.status(400).json({ message: "กรุณาอัพโหลดรูปภาพ" });
    }

    const imagePath = `/uploads/proofs/${req.file.filename}`;

    // First, get the user's department
    const user = await prisma.user.findUnique({
      where: { UserID: userId },
      select: { DepartmentID: true }
    });

    if (!user) {
      return res.status(404).json({ message: "ไม่พบข้อมูลผู้ใช้" });
    }

    // Find existing result
    const existingResult = await prisma.activityResults.findFirst({
      where: {
        ActivityID: parseInt(activityId),
        UserID: userId,
        DepartmentID: user.DepartmentID,
        IsArchived: false
      }
    });

    if (!existingResult) {
      return res.status(404).json({ message: "ไม่พบข้อมูลการลงทะเบียนกิจกรรม" });
    }

    // Update activity result
    const result = await prisma.activityResults.update({
      where: {
        ID: existingResult.ID // Using the primary key
      },
      data: {
        imageActivity: imagePath,
        Status: "active", // Update status to pending review
      }
    });

    return res.json({
      message: "อัพโหลดหลักฐานสำเร็จ",
      result,
    });
  } catch (error) {
    console.error("Error uploading proof:", error);
    return res.status(500).json({
      message: "เกิดข้อผิดพลาดในการอัพโหลดหลักฐาน",
    });
  }
};

// Get proof image
export const getProof: RequestHandler = async (req, res) => {
  try {
    const { activityId, userId } = req.params;

    // First, get the user's department
    const user = await prisma.user.findUnique({
      where: { UserID: userId },
      select: { DepartmentID: true }
    });

    if (!user) {
      return res.status(404).json({ message: "ไม่พบข้อมูลผู้ใช้" });
    }

    // Find result with relations
    const result = await prisma.activityResults.findFirst({
      where: {
        ActivityID: parseInt(activityId),
        UserID: userId,
        DepartmentID: user.DepartmentID,
        IsArchived: false
      },
      include: {
        Activity: true,
        User: true,
      },
    });

    if (!result) {
      return res.status(404).json({ message: "ไม่พบข้อมูลกิจกรรม" });
    }

    return res.json(result);
  } catch (error) {
    console.error("Error fetching proof:", error);
    return res.status(500).json({
      message: "เกิดข้อผิดพลาดในการดึงข้อมูล",
    });
  }
};

export default {
  handleUploadImage,
  uploadProof,
  getProof,
};
