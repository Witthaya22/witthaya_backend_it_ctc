import { RequestHandler } from "express"
import prisma from "../prisma"

export default <RequestHandler>(async (req, res) => {
  const payload = {
    title: req.body.title,
    description: req.body.description,
    images: req.body.images,
    score: req.body.score,
  }
  await prisma.activity.upsert({
    where: {
      id: +req.params.id || -1
    },
    create: payload,
    update: payload
  })
  res.status(201).send({
    message: "อัปเดตกิจกรรมสําเร็จ"
  })
})
