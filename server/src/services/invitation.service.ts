import { api } from "./api";

export interface RSVPData {

    side: "TIGRAN" | "KRISTINA";

    name: string;

    status: "ACCEPTED" | "DECLINED";

    guestCount: number;

    message?: string;

}

export async function getInvitation(
    slug: string
) {

    const response = await api.get(
        `/invite/${slug}`
    );

    return response.data.data;

}

export async function submitRSVP(
    slug: string,
    data: RSVPData
) {

    const response = await api.post(

        `/invite/${slug}/rsvp`,

        data

    );

    return response.data.data;

}