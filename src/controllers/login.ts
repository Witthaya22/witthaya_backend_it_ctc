import { RequestHandler } from "express";
import prisma from "../prisma";
import { compare } from "bcrypt";
import { User } from "../generated/prisma-client-js";
import { omit } from "lodash";
import jwt from "jsonwebtoken";

declare module 'express-session' {
  export interface SessionData {
    auth?: Omit<User, 'password'>
  }
}

export default <RequestHandler>(async(req ,res) => {
  const user = await prisma.user.findUnique({
    where: {
      UserID: req.body.email
    }
  })
  if(!user) {
    return res.status(400).send({
      message: "เลขประจำตัวหรือรหัสผ่านไม่ถูกต้อง"
    })
  }
  const result = await compare(req.body.password, user.UserPassword)
  if(!result) {
    return res.status(400).send({
      message: "เลขประจำตัวหรือรหัสผ่านไม่ถูกต้อง"
    })
  }
  req.session.auth = omit(user, 'password');

  if (!process.env.JWT_SECRET) {
    throw new Error('JWT_SECRET environment variable is not set');
  }

  const token = jwt.sign({ id: user.UserID, role: user.Role }, process.env.JWT_SECRET, { expiresIn: "1h" });
  res.cookie("token", token, { httpOnly: true, secure: process.env.NODE_ENV === "production" });

  res.status(200).send({
    message: "เข้าสู่ระบบสําเร็จ",
    role: user.Role,
    user: omit(user, 'password'), // Send user data to the client
    token // Send token to the client
  });
})
