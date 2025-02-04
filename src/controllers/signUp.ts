import { RequestHandler } from "express";
import { hash } from "bcrypt"
import prisma from "../prisma";

export default <RequestHandler>(async(req, res) => {
  const count = await prisma.user.count({
    where: {
      UserID: req.body.email
    }
  })
  if (count > 0) {
    return res.status(400).send({
      message: "มีบัญชีนี้ในระบบแล้ว"
    })
  }
  await prisma.user.create({
    data: {
      UserID: req.body.email,
      UserFirstName: req.body.name,
      UserLastName: req.body.lastName, // Add this property
      Department: { connect: { DepartmentID: req.body.departmentId } }, // Add this property
      UserPassword: await hash(req.body.password, 10),
      classAt: req.body.classAt,       // เพิ่มส่วนนี้
        classRoom: req.body.classRoom,   // เพิ่มส่วนนี้

    }
  })
  res.status(201).send({
    message: `คุณได้สมัครสมาชิก ${req.body.email} เรียบร้อยแล้ว`
  })
})
