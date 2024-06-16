import express, { ErrorRequestHandler } from 'express'
import dotenv from 'dotenv'
import router from './router'
import prisma from './prisma'




dotenv.config()
const port = process.env.PORT ? +process.env.PORT : 4000

async function startServer() {
  await prisma.$connect()

  const app = express()
  app.use(express.json())
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
