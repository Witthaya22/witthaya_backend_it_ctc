import { RequestHandler } from "express";
import prisma from "../prisma";

export const getDepartments: RequestHandler = async (req, res) => {
  try {
    const departments = await prisma.department.findMany({
      where: {
        IsArchived: false
      },
      select: {
        DepartmentID: true,
        Name: true
      },
      orderBy: {
        Name: 'asc'
      }
    });

    res.json(departments);
  } catch (error) {
    console.error("Error fetching departments:", error);
    res.status(500).json({
      message: "ไม่สามารถดึงข้อมูลแผนกได้"
    });
  }
};
