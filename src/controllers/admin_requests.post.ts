import { RequestHandler } from "express";
import prisma from "../prisma";

// GET all requests
export const getAllRequests: RequestHandler = async (req, res) => {
  try {
    const requests = await prisma.adminRequest.findMany({
      where: { IsArchived: false },
      orderBy: { CreatedAt: 'desc' }
    });
    res.json({ requests });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching requests' });
  }
};

// POST new request
export const createRequest: RequestHandler = async (req, res) => {
  try {
    const request = await prisma.adminRequest.create({
      data: {
        SenderName: req.body.senderName,
        SenderRole: req.body.senderRole,
        Title: req.body.title,
        Message: req.body.message,
        Type: req.body.type,
        ActivityID: req.body.activityId,
        Status: 'PENDING'
      }
    });
    res.json({ request });
  } catch (error) {
    res.status(500).json({ message: 'Error creating request' });
  }
};

// PUT update request
export const updateRequest: RequestHandler = async (req, res) => {
  try {
    const request = await prisma.adminRequest.update({
      where: { ID: parseInt(req.params.id) },
      data: {
        Status: req.body.status,
        ResponseMessage: req.body.responseMessage
      }
    });
    res.json({ request });
  } catch (error) {
    res.status(500).json({ message: 'Error updating request' });
  }
};
