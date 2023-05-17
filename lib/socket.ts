import { io, Socket } from "socket.io-client";
import type { ServerToClientEvents, ClientToServerEvents } from "../types/socket";

export const SocketIo: Socket<ServerToClientEvents, ClientToServerEvents> = io('https://api.omnisive.technetic.co.in', {
    transports: ['websocket']
});