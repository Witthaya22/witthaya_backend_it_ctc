// controllers/getUserDetails.ts
import { RequestHandler } from "express";
import prisma from "../prisma";

const getUserDetails: RequestHandler = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await prisma.user.findUnique({
      where: {
        UserID: id,
        IsArchived: false
      },
      select: {
        UserID: true,
        UserFirstName: true,
        UserLastName: true,
        UserImage: true,
        DepartmentID: true,
        Role: true,
        Department: {
          select: {
            Name: true
          }
        }
      }
    });

    if (!user) {
      return res.status(404).json({ message: 'ไม่พบข้อมูลผู้ใช้' });
    }

    res.json({ user });
  } catch (error) {
    console.error('Error fetching user details:', error);
    res.status(500).json({ message: 'เกิดข้อผิดพลาดในการดึงข้อมูลผู้ใช้' });
  }
};

export default getUserDetails;
