import { z } from "zod";

export const createGuestSchema = z.object({

    body: z.object({

        name: z
            .string()
            .trim()
            .min(2, "Name must contain at least 2 characters.")
            .max(100, "Name is too long."),

        side: z.enum([
            "TIGRAN",
            "KRISTINA"
        ]),

        status: z.enum([
            "ACCEPTED",
            "DECLINED"
        ]),

        guestCount: z.coerce
            .number()
            .int()
            .min(1, "Guest count must be at least 1.")
            .max(20, "Guest count cannot exceed 20.")
            .default(1),

        message: z
            .string()
            .optional()

    })

});

export const updateGuestSchema = z.object({

    params: z.object({

        id: z.string()

    }),

    body: z.object({

        name: z
            .string()
            .min(2)
            .optional(),

        side: z.enum([
            "TIGRAN",
            "KRISTINA"
        ]).optional(),

        status: z.enum([
            "PENDING",
            "ACCEPTED",
            "DECLINED"
        ]).optional(),

        guestCount: z
            .number()
            .int()
            .min(1)
            .optional(),

        message: z
            .string()
            .optional()

    })

});