import { RequestHandler } from "express";
import prisma from "../prisma";
import { compare } from "bcrypt";
import { User } from "../generated/prisma-client-js";

declare module 'express-session' {
  export interface SessionData {
    auth?: User
  }
}

export default <RequestHandler>(async(req ,res) => {
  const user = await prisma.user.findUnique({
    where: {
      email: req.body.email
    }
  })
  if(!user) {
    return res.status(400).send({
      message: "อีเมลหรือรหัสผ่านไม่ถูกต้อง"
    })
  }
  const result = await compare(req.body.password, user.password)
  if(!result) {
    return res.status(400).send({
      message: "อีเมลหรือรหัสผ่านไม่ถูกต้อง"
    })
  }
  req.session.auth = user
  res.status(200).send({
    message: "เข้าสู่ระบบสําเร็จ"
  })
})
