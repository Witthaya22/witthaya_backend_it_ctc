import { RequestHandler } from "express";
import prisma from "../prisma";

const upsertUser: RequestHandler = async (req, res) => {
  const bcrypt = require("bcrypt");
  const formData = req.body;

  try {
    // ตรวจสอบข้อมูลที่จำเป็น
    if (!formData.UserFirstName || !formData.UserLastName ||
        !formData.DepartmentID || typeof formData.Role !== "string" ||
        !formData.classAt || !formData.classRoom) {
      return res.status(400).json({
        message: "กรุณากรอกข้อมูลให้ครบถ้วน",
      });
    }

    if (req.query.id) {
      // กรณีแก้ไข - เฉพาะฟิลด์ที่อัพเดทได้
      const updateData: any = {
        UserFirstName: formData.UserFirstName,
        UserLastName: formData.UserLastName,
        Role: formData.Role,
        DepartmentID: formData.DepartmentID,
        classAt: formData.classAt,
        classRoom: formData.classRoom,
      };

      // เพิ่ม password ถ้ามีการส่งมา
      if (formData.UserPassword) {
        updateData.UserPassword = await bcrypt.hash(formData.UserPassword, 10);
      }

      await prisma.user.update({
        where: { UserID: req.query.id.toString() },
        data: updateData,
      });

    } else {
      // กรณีสร้างใหม่ - ต้องมี UserID
      if (!formData.UserID) {
        return res.status(400).json({
          message: "กรุณาระบุรหัสนักศึกษา",
        });
      }

      // ตรวจสอบรหัสนักศึกษาซ้ำ
      const existingUser = await prisma.user.findUnique({
        where: { UserID: formData.UserID }
      });

      if (existingUser) {
        return res.status(400).json({
          message: "รหัสนักศึกษานี้มีในระบบแล้ว",
        });
      }

      // ตรวจสอบรูปแบบของระดับชั้นและห้องเรียน
      const validClassLevels = ['ปวช.2', 'ปวส.1', 'ปวส.2'];
      if (!validClassLevels.includes(formData.classAt)) {
        return res.status(400).json({
          message: "ระดับชั้นไม่ถูกต้อง",
        });
      }

      // สร้างข้อมูลใหม่
      const createData: any = {
        UserID: formData.UserID,
        UserFirstName: formData.UserFirstName,
        UserLastName: formData.UserLastName,
        Role: formData.Role,
        DepartmentID: formData.DepartmentID,
        classAt: formData.classAt,
        classRoom: formData.classRoom,
      };

      if (formData.UserPassword) {
        createData.UserPassword = await bcrypt.hash(formData.UserPassword, 10);
      }

      await prisma.user.create({
        data: createData
      });
    }

    res.status(201).json({
      message: req.query.id ? "อัปเดตข้อมูลผู้ใช้สำเร็จ" : "เพิ่มผู้ใช้สำเร็จ",
    });

  } catch (error) {
    console.error("เกิดข้อผิดพลาด:", error);
    res.status(500).json({
      message: "เกิดข้อผิดพลาดในการดำเนินการ",
    });
  }
};

export default upsertUser;
