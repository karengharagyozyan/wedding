import { z } from "zod";

export const rsvpSchema = z.object({

    side: z.enum([
        "TIGRAN",
        "KRISTINA"
    ]),

    name: z
        .string()
        .trim()
        .min(2, "Մուտքագրեք ձեր անունը"),

    status: z.enum([
        "ACCEPTED",
        "DECLINED"
    ]),

    guestCount: z
        .number()
        .int()
        .min(1)
        .max(20),

    message: z.string().optional()

});

export type RSVPFormData = z.infer<typeof rsvpSchema>;