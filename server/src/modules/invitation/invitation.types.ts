import {
    GuestSide,
    GuestStatus
} from "@prisma/client";

export interface RSVPInput {
    side: GuestSide;
    name: string;
    status: GuestStatus;
    guestCount?: number;
    message?: string;
}