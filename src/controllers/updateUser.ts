import { Request, Response } from 'express';
import prisma from "../prisma";
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import bcrypt from 'bcrypt';

// const prisma = new PrismaClient()

// Configure multer for file upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = 'public/uploads/profiles'
    // Create directory if it doesn't exist
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true })
    }
    cb(null, uploadDir)
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, 'profile-' + uniqueSuffix + path.extname(file.originalname))
  }
})

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB limit
  },
  fileFilter: (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png/
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase())
    const mimetype = allowedTypes.test(file.mimetype)

    if (extname && mimetype) {
      return cb(null, true)
    }
    cb(new Error('Only .png, .jpg and .jpeg formats are allowed!'))
  }
}).single('UserImage')

// Get user details
export const getUsers = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const user = await prisma.user.findUnique({
      where: {
        UserID: id,
        IsArchived: false
      },
      select: {
        UserID: true,
        UserFirstName: true,
        UserLastName: true,
        DepartmentID: true,
        UserImage: true,
        Role: true,
        classAt: true,      // เพิ่มส่วนนี้
        classRoom: true,    // เพิ่มส่วนนี้
        // Bio: true,
        Department: {
          select: {
            Name: true
          }
        }
      }
    });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json({ user });
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Update user profile
export const updateUser = async (req: Request, res: Response) => {
  return new Promise((resolve) => {
    upload(req, res, async (err) => {
      if (err instanceof multer.MulterError) {
        return res.status(400).json({ message: 'File upload error: ' + err.message });
      } else if (err) {
        return res.status(400).json({ message: err.message });
      }

      try {
        const { UserID } = req.params;
        const {
          UserFirstName,
          UserLastName,
          Bio,
          classAt,           // รับข้อมูลใหม่
          classRoom,         // รับข้อมูลใหม่
          currentPassword,   // รับข้อมูลใหม่
          newPassword       // รับข้อมูลใหม่
        } = req.body;

        // ตรวจสอบว่ามีผู้ใช้อยู่จริง
        const existingUser = await prisma.user.findUnique({
          where: { UserID }
        });

        if (!existingUser) {
          return res.status(404).json({ message: 'User not found' });
        }

        // ถ้ามีการเปลี่ยนรหัสผ่าน
        if (currentPassword && newPassword) {
          // ตรวจสอบรหัสผ่านปัจจุบัน
          const isPasswordValid = await bcrypt.compare(
            currentPassword,
            existingUser.UserPassword
          );

          if (!isPasswordValid) {
            return res.status(400).json({ message: 'รหัสผ่านปัจจุบันไม่ถูกต้อง' });
          }

          // เข้ารหัสรหัสผ่านใหม่
          const hashedNewPassword = await bcrypt.hash(newPassword, 10);
        }

        // ลบรูปภาพเก่าถ้ามีการอัปโหลดรูปใหม่
        if (req.file && existingUser.UserImage) {
          const oldImagePath = path.join(__dirname, '../../public', existingUser.UserImage);
          if (fs.existsSync(oldImagePath)) {
            fs.unlinkSync(oldImagePath);
          }
        }

        // อัปเดตข้อมูลผู้ใช้
        const updatedUser = await prisma.user.update({
          where: { UserID },
          data: {
            UserFirstName,
            UserLastName,
            classAt,
            classRoom,
            ...(req.file && { UserImage: `/uploads/profiles/${req.file.filename}` }),
            ...(Bio && { Bio }),
            ...(newPassword && { UserPassword: await bcrypt.hash(newPassword, 10) })
          }
        });

        res.json({
          message: 'Profile updated successfully',
          user: updatedUser
        });
      } catch (error) {
        console.error('Error updating user:', error);
        res.status(500).json({ message: 'Internal server error' });
      }
    });
  });
};

// Delete user image
export const deleteUserImage = async (req: Request, res: Response) => {
  try {
    const { UserID } = req.params

    const user = await prisma.user.findUnique({
      where: { UserID }
    })

    if (!user || !user.UserImage) {
      return res.status(404).json({ message: 'User or image not found' })
    }

    // Delete image file
    const imagePath = path.join(__dirname, '../../public', user.UserImage)
    if (fs.existsSync(imagePath)) {
      fs.unlinkSync(imagePath)
    }

    // Update user record
    await prisma.user.update({
      where: { UserID },
      data: { UserImage: null }
    })

    res.json({ message: 'Profile image deleted successfully' })
  } catch (error) {
    console.error('Error deleting user image:', error)
    res.status(500).json({ message: 'Internal server error' })
  }
}

export default { getUsers, updateUser, deleteUserImage }
