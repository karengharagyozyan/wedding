import { Request, Response } from "express";
import { prisma } from "../prisma/client";

export async function testDatabase(
  req: Request,
  res: Response
): Promise<void> {
  const guestCount = await prisma.guest.count();

  res.status(200).json({
    success: true,
    guestCount,
  });
}