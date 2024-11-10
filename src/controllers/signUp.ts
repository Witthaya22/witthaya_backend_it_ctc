import { RequestHandler } from "express";
import { hash } from "bcrypt"
import prisma from "../prisma";

export default <RequestHandler>(async(req, res) => {
  const count = await prisma.user.count({
    where: {
      id: req.body.email
    }
  })
  if (count > 0) {
    return res.status(400).send({
      message: "มีบัญชีนี้ในระบบแล้ว"
    })
  }
  await prisma.user.create({
    data: {
      id: req.body.email,
      firstName: req.body.name,
      lastName: req.body.lastName, // Add this property
      department: { connect: { id: req.body.departmentId } }, // Add this property
      password: await hash(req.body.password, 10)
    }
  })
  res.status(201).send({
    message: `คุณได้สมัครสมาชิก ${req.body.email} เรียบร้อยแล้ว`
  })
})
