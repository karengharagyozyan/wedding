import { GuestSide, GuestStatus, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getGuestBySlug(
    slug: string
) {
    return prisma.guest.findUnique({
        where: { slug, },
    });
}

export async function updateGuestBySlug(
    slug: string,
    data: {
        side: GuestSide;
        name: string;
        status: GuestStatus;
        guestCount: number;
    }
) {
    return prisma.guest.update({
        where: { slug, },
        data,
    });
}

export async function getAllGuests() {
    return prisma.guest.findMany({
        orderBy: {
            createdAt: "desc",
        },
    });
}