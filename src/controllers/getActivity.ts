import { RequestHandler } from "express";
import prisma from "../prisma";

export default <RequestHandler>(async(req, res) => {
  const id = parseInt(req.params.id, 10); // Convert to number
  const activity = await prisma.activity.findUnique({
    where: {
      ID: id
    }
  })
  res.send({
    activity
  })
})
