import { useEffect, useRef } from "react";
import type { MutableRefObject } from "react";
import ChatForm from "./ChatForm";
import Message from "./Message";
import { SocketIo } from "../../lib/socket";
import type { Socket } from "socket.io-client";

export default function ChatContainer() {
  const socket = useRef() as MutableRefObject<Socket>;
  useEffect(() => {
    socket.current = SocketIo;
    if (socket.current.connected) return console.log("already connected");
    socket.current.connect();
    socket.current.on("connection", () => {
      console.log("connected");
    });
    console.log(socket.current);
    return () => {
      socket.current.disconnect()
    }
  }, [socket]);

  return (
    <div className="flex flex-col h-full items-center justify-between w-full py-2">
      <div className="w-full px-3 overflow-y-scroll scrollbar-custom">
        <Message />
        <Message />
        <Message />
      </div>
        <ChatForm />
    </div>
  );
}