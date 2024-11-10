import { RequestHandler } from "express";
import prisma from "../prisma";

export default <RequestHandler>(async(req, res) => {
  const user = await prisma.user.findUnique({
    where: {
      id: +req.params.id
    }
  })
  res.send({
    user
  })
})