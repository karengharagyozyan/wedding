import { api } from "./api";

export interface Guest {
    id: string;
    name: string;
    side: "TIGRAN" | "KRISTINA";
    status: "PENDING" | "ACCEPTED" | "DECLINED";
    guestCount: number;
    createdAt: string;
}

export interface CreateGuestDto {
    name: string;
    side: "TIGRAN" | "KRISTINA";
    status: "ACCEPTED" | "DECLINED";
    guestCount: number;
    message?: string;
}

export async function createGuest(data: CreateGuestDto) {
    const response = await api.post(
        "/guests",
        data
    );

    return response.data.data;
}

export async function getGuests() {
    const response = await api.get(
        "/guests"
    );

    return response.data.data as Guest[];
}

export async function deleteGuest(id: string) {
    await api.delete(`/guests/${id}`);
}

export async function updateGuest(
    id: string,
    data: Partial<CreateGuestDto>
) {
    const response = await api.put(
        `/guests/${id}`,
        data
    );

    return response.data.data;
}