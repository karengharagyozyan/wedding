import { Request, Response } from "express";

export function health(
    req: Request,
    res: Response
) {
    res.json({
        success: true,
        message: "Server running"
    });
}