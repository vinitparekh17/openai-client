import { AuthOptions } from "./auth";
import { getServerSession } from "next-auth";

export async function getSession() {
    return await getServerSession(AuthOptions);
}

export async function getCurrentUser() {
    const session = await getSession()
    return session?.user;
}