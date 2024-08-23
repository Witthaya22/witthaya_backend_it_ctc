import { RequestHandler } from "express";
import prisma from "../prisma";

export default <RequestHandler>(async(req, res) => {
  const page = req.query.page ? +req.query.page : 1

  const perPage = 15
  const users = await prisma.user.findMany({
    take: perPage,
    skip: perPage * (page - 1)
  })
  res.send({
    users
  })
})
