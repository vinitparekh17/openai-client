import { useRef, useEffect, useState } from "react";
import type { MutableRefObject } from "react";
import { SocketIo } from "../../lib/socket";
import type { Socket } from "socket.io-client";
import ChatForm from "./ChatForm";
import Message from "./Message";

export default function ChatContainer() {
  const socket = useRef() as MutableRefObject<Socket>;
  const [resChunks, setResChunks] = useState<string[]>([]);
  useEffect(() => {
    socket.current = SocketIo;
    if (socket.current.connected) {
      console.log("connected");
      socket.current.on("response-stream", (data) => {
        let drilled = JSON.parse(data.split("\n\n")[0].split("\n")[0].split("data: ")[1]).choices[0].delta.content;
        setResChunks((prev) => [...prev, drilled]);
      });
    }
    socket.current.connect();
    return () => {
      socket.current.disconnect()
    }
  }, [socket]);

  return (
    <div className="flex flex-col h-full items-center justify-between w-full py-2">
      <div className="w-full px-3 overflow-y-scroll scrollbar-custom">
        <Message messages={resChunks} />
      </div>
      <ChatForm socket={socket} />
    </div>
  );
}