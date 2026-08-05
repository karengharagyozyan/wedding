import { api } from "./api";

export interface LoginDto {

    username: string;

    password: string;

}

export interface Admin {

    id: string;

    username: string;

}

export async function login(data: LoginDto) {

    const response = await api.post(
        "/auth/login",
        data
    );

    return response.data.data as Admin;

}

export async function logout() {

    await api.post("/auth/logout");

}

export async function me() {

    const response = await api.get("/auth/me");

    return response.data.data as Admin;

}