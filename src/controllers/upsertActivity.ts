import { RequestHandler } from "express";
import prisma from "../prisma";

const upsertActivity: RequestHandler = async (req, res) => {
  const { title, description, images, score } = req.body;

  // Basic validation
  if (!title || !description || !Array.isArray(images) || typeof score !== "number") {
    return res.status(400).send({
      message: "ข้อมูลไม่ถูกต้อง",
    });
  }

  const payload = {
    title,
    description,
    images,
    score,
    startDate: new Date(), // add startDate property
    endDate: new Date(), // add endDate property
    type: 'some-type', // add type property
  };

  try {
    const id = req.query.id;
    let idValue: number;

    if (Array.isArray(id)) {
      idValue = parseInt((id as string[])[0], 10);
    } else if (typeof id === 'string') {
      // If id is a string, parse it as an integer
      idValue = parseInt(id, 10);
    } else {
      // If id is neither an array nor a string, throw an error
      throw new Error('Invalid id value');
    }

    await prisma.activity.upsert({
      where: {
        id: idValue.toString(),
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
