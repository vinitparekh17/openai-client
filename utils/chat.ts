import { MutableRefObject } from "react";
import type { Socket } from "socket.io-client";
import { BACKEND_URI } from "../config";

interface chatData {
    prompt: string
    socket: MutableRefObject<Socket>
}
export const handleChat = (data: chatData) => {
    let { prompt, socket } = data;
    socket.current.emit("request-stream", prompt);
}