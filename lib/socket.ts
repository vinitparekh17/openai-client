import { io, Socket } from "socket.io-client";
import { BACKEND_URI } from "../config";
import type { ServerToClientEvents, ClientToServerEvents } from "../types/socket";

export const SocketIo: Socket<ServerToClientEvents, ClientToServerEvents> = io(BACKEND_URI, {
    transports: ['websocket'],
    autoConnect: true,
    withCredentials: true,
    secure: true,
});