import { z } from "zod";


export const slugSchema = z.object({

    params: z.object({

        slug: z.string().min(1)

    })

});


export const rsvpSchema = z.object({

    params: z.object({

        slug: z.string().min(1)

    }),


    body: z.object({

        side: z.enum([
            "TIGRAN",
            "KRISTINA"
        ]),

        name: z
            .string()
            .trim()
            .min(2)
            .max(100),

        status: z.enum([
            "PENDING",
            "ACCEPTED",
            "DECLINED"
        ]),

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