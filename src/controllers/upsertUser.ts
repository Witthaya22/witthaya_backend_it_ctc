import { RequestHandler } from "express";
import prisma from "../prisma";

const upsertUser: RequestHandler = async (req, res) => {
  const { name, email, password, role } = req.body;

  // Basic validation
  if (!name || !email || typeof role !== "string") {
    return res.status(400).send({
      message: "ข้อมูลไม่ถูกต้อง",
    });
  }

  const payload: any = {
    name,
    email,
    role,
  };

  // Only include password in the payload if it's provided (for updates)
  if (password) {
    payload.password = password; // Make sure to hash the password if needed
  }

  try {
    await prisma.user.upsert({
      where: {
        id: req.query.id ? req.query.id.toString() : '-1',
      },
      create: payload,
      update: payload,
    });

    res.status(201).send({
      message: "อัปเดตข้อมูลผู้ใช้สำเร็จ",
    });
  } catch (error) {
    console.error("Error upserting user:", error);
    res.status(500).send({
      message: "เกิดข้อผิดพลาดในการอัปเดตข้อมูลผู้ใช้",
    });
  }
};

export default upsertUser;
