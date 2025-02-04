import { RequestHandler } from "express";
import prisma from "../prisma";

// Get all semesters
export const getAllSemesters: RequestHandler = async (req, res) => {
  try {
    const semesters = await prisma.semester.findMany({
      where: {
        IsArchived: false,
      },
      orderBy: [
        {
          Year: 'desc',
        },
        {
          Term: 'desc',
        },
      ],
    });

    res.json({ semesters });
  } catch (error) {
    console.error('Error getting semesters:', error);
    res.status(500).json({ message: "เกิดข้อผิดพลาดในการดึงข้อมูลภาคเรียน" });
  }
};

// Get active semester
export const getActiveSemester: RequestHandler = async (req, res) => {
  try {
    // หา semester ที่ active หรือ completed ที่ยังไม่ archived
    const currentSemester = await prisma.semester.findFirst({
      where: {
        IsArchived: false,
        Status: {
          in: ['ACTIVE', 'COMPLETED']
        }
      },
      orderBy: {
        UpdatedAt: 'desc'
      },
      include: {
        Activities: true,
      },
    });

    if (!currentSemester) {
      return res.status(404).json({ message: "ไม่พบข้อมูลภาคเรียน" });
    }

    res.json({ semester: currentSemester });
  } catch (error) {
    console.error('Error getting active semester:', error);
    res.status(500).json({ message: "เกิดข้อผิดพลาดในการดึงข้อมูลภาคเรียนปัจจุบัน" });
  }
};

// Create new semester
export const createSemester: RequestHandler = async (req, res) => {
  const { Year, Term, StartDate, EndDate, Description } = req.body;

  try {
    // Check for existing active semester
    const existingActive = await prisma.semester.findFirst({
      where: { Status: "ACTIVE", IsArchived: false }
    });

    // Create new semester
    const semester = await prisma.semester.create({
      data: {
        Year: parseInt(Year),
        Term: parseInt(Term),
        StartDate: new Date(StartDate),
        EndDate: new Date(EndDate),
        Status: existingActive ? "PENDING" : "ACTIVE",
        Description: Description || null,
        UpdatedAt: new Date(),
      }
    });

    res.status(201).json({
      message: "สร้างภาคเรียนสำเร็จ",
      semester
    });
  } catch (error) {
    console.error('Error creating semester:', error);
    res.status(500).json({ message: "เกิดข้อผิดพลาดในการสร้างภาคเรียน" });
  }
};

// Update semester
export const updateSemester: RequestHandler = async (req, res) => {
  const { id } = req.params;
  const { Year, Term, StartDate, EndDate, Status, Description } = req.body;

  try {
    // If setting to ACTIVE, deactivate other active semesters
    if (Status === "ACTIVE") {
      await prisma.semester.updateMany({
        where: {
          Status: "ACTIVE",
          ID: { not: parseInt(id) },
          IsArchived: false
        },
        data: { Status: "COMPLETED" }
      });
    }

    const semester = await prisma.semester.update({
      where: { ID: parseInt(id) },
      data: {
        Year: Year ? parseInt(Year) : undefined,
        Term: Term ? parseInt(Term) : undefined,
        StartDate: StartDate ? new Date(StartDate) : undefined,
        EndDate: EndDate ? new Date(EndDate) : undefined,
        Status,
        Description,
        UpdatedAt: new Date(),
      }
    });

    res.json({
      message: "อัพเดทภาคเรียนสำเร็จ",
      semester
    });
  } catch (error) {
    console.error('Error updating semester:', error);
    res.status(500).json({ message: "เกิดข้อผิดพลาดในการอัพเดทภาคเรียน" });
  }
};

// Delete semester (soft delete)
export const deleteSemester: RequestHandler = async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.semester.update({
      where: { ID: parseInt(id) },
      data: {
        IsArchived: true,
        UpdatedAt: new Date()
      }
    });

    res.json({ message: "ลบภาคเรียนสำเร็จ" });
  } catch (error) {
    console.error('Error deleting semester:', error);
    res.status(500).json({ message: "เกิดข้อผิดพลาดในการลบภาคเรียน" });
  }
};
