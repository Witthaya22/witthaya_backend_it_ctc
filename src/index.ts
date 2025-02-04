import express, { ErrorRequestHandler } from 'express';
import dotenv from 'dotenv';
import session from 'express-session';
import RedisStore from 'connect-redis';
import { createClient } from 'redis';
import router from './router';
import prisma from './prisma';
import { randomUUID } from 'crypto';
import ms from 'ms';
import { MulterError } from 'multer';
import path from 'path';
import fs from 'fs';

dotenv.config();

// Create uploads directory
const uploadsDir = path.join(process.cwd(), 'public', 'uploads', 'activities');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

let redisClient = createClient();
redisClient.connect().catch(console.error);
const port = process.env.PORT ? +process.env.PORT : 4000;

let redisStore = new RedisStore({
  client: redisClient,
  prefix: "myapp:",
});

async function startServer() {
  await prisma.$connect();

  const app = express();
  app.use(express.json());
  app.use('/api/uploads', express.static('public/uploads'));
  app.use('/images', express.static('public/images'));
  // ใน app.ts หรือ server.ts
// app.use('/uploads', express.static('public/uploads'));
app.use('/uploads', express.static(path.join(__dirname, '../public/uploads')));

  app.use(session({
    store: redisStore,
    secret: process.env.SECRET_KEY || randomUUID(),
    resave: false,
    saveUninitialized: false,
    rolling: true,
    cookie: {
      maxAge: ms('7d'),
      httpOnly: true
    },
  }));

  app.use(router);
  app.use(express.static('public'));

  // Error handler for multer and other errors
  app.use(<ErrorRequestHandler>((err, req, res, next) => {
    if (err instanceof MulterError) {
      if (err.code === 'LIMIT_FILE_SIZE') {
        return res.status(400).json({
          message: 'ไฟล์มีขนาดใหญ่เกินไป (สูงสุด 5MB)'
        });
      }
      return res.status(400).json({
        message: 'เกิดข้อผิดพลาดในการอัปโหลดไฟล์'
      });
    }
    res.status(err.statusCode || 500).send({
      message: err.message
    });
  }));

  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
}

startServer();
