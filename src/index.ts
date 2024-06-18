import express, { ErrorRequestHandler } from 'express'
import dotenv from 'dotenv'
import session from 'express-session'
import router from './router'
import prisma from './prisma'
import { randomUUID } from 'crypto'
import ms from 'ms'





dotenv.config()
const port = process.env.PORT ? +process.env.PORT : 4000

async function startServer() {
  await prisma.$connect()

  const app = express()
  // ยังไม่ได้เก็บค่า แบบที่ restart server แล้ว session ยังอยู่ ต้องใช้ connect-pg-simple แทน
  app.use(express.json())
  app.use(session({
    secret: randomUUID(),
    resave: false,
    saveUninitialized: false,
    rolling: true,
    cookie: {
      maxAge: ms('7d'),
      httpOnly: true
    }
  }))
  app.use(router)

  app.use(<ErrorRequestHandler>((err, req, res, next) => {
    res.status(err.statusCode || 500).send({
      message: err.message
    })
  }))

  app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
  })
}
startServer()
