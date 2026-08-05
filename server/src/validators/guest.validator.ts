import { z } from "zod";

export const guestResponseSchema = z.object({
    side: z.enum(["TIGRAN", "KRISTINA"]),

    name: z
        .string()
        .trim()
        .min(2, "Please enter your name.")
        .max(100, "Name is too long."),

    status: z.enum(["ACCEPTED", "DECLINED"]),

    guestCount: z.coerce
        .number()
        .int()
        .min(1, "Guest count must be at least 1.")
        .max(20, "Guest count cannot exceed 20."),
});

export type GuestResponseInput = z.infer<typeof guestResponseSchema>;