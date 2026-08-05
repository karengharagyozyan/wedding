import { GuestSide, GuestStatus } from "@prisma/client";

export interface CreateGuestInput {
    name: string;
    side?: GuestSide;
    status?: GuestStatus;
    phone?: string;
    email?: string;
    guestCount?: number;
    message?: string;
}

export interface UpdateGuestInput {
    name?: string;
    side?: GuestSide;
    phone?: string;
    email?: string;
    status?: GuestStatus;
    guestCount?: number;
    message?: string;
}