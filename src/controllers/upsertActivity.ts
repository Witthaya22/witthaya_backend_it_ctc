import { RequestHandler } from "express";
import prisma from "../prisma";

const upsertActivity: RequestHandler = async (req, res) => {
  const { title, description, images, score, location } = req.body;

  // Basic validation
  if (!title || !description || !Array.isArray(images) || typeof score !== "number") {
    return res.status(400).send({
      message: "ข้อมูลไม่ถูกต้อง",
    });
  }

  const payload = {
    Title: title,
    Description: description,
    Images: images,  // Ensure this is JSON-compatible
    Score: score,
    StartDate: new Date(),
    EndDate: new Date(),
    Type: 'some-type',
    Location: location,  // Include location in the payload
  };

  try {
    const id = req.query.id;
    let idValue: number;

    if (Array.isArray(id)) {
      idValue = parseInt((id as string[])[0], 10);
    } else if (typeof id === 'string') {
      idValue = parseInt(id, 10);
    } else {
      throw new Error('Invalid id value');
    }

    await prisma.activity.upsert({
      where: {
        ID: idValue,
      },
      create: payload,
      update: payload,
    });

    res.status(201).send({
      message: "อัปเดตกิจกรรมสำเร็จ",
    });
  } catch (error) {
    console.error("Error upserting activity:", error);
    res.status(500).send({
      message: "เกิดข้อผิดพลาดในการอัปเดตกิจกรรม",
    });
  }
};


export default upsertActivity;
