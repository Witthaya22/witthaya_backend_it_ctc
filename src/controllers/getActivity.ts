import { RequestHandler } from "express";
import prisma from "../prisma";

export default <RequestHandler>(async(req, res) => {
  const activity = await prisma.activity.findUnique({
    where: {
      ID: req.params.id
    }
  })
  res.send({
    activity
  })
})
