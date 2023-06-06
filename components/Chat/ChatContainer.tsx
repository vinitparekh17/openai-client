import { useRef, useEffect, useState } from "react";
import type { MutableRefObject } from "react";
import { SocketIo } from "../../lib/socket";
import type { Socket } from "socket.io-client";
import ChatForm from "./ChatForm";
import Message from "./Message";

export default function ChatContainer() {
  const socket = useRef() as MutableRefObject<Socket>;
  const [resChunks, setResChunks] = useState<string[]>([]);
  // array of arrays of strings for messages
  const [messages, setMessages] = useState<string[]>([]);
  useEffect(() => {
    socket.current = SocketIo;
    if (socket.current.connected) {
      console.log("connected");
      socket.current.on("response-stream", data => {
        try {
        console.log(JSON.parse(data));
        } catch (e) {
          console.log(`error: ${e}\n str: ${JSON.stringify(data)}\n data: ${data}`);
        }
      });
    }
    socket.current.connect();
    return () => {
      socket.current.disconnect()
    }
  }, [socket]);

  return (
    <div className="flex flex-col h-full items-center justify-between container py-2">
      <div className="container px-3 overflow-y-scroll scrollbar-custom">
        {resChunks.length > 0 && <Message chunks={resChunks} setResChunks={setResChunks} setMsg={setMessages} />}
        {messages.length > 0 && messages.map((msg, i) => <Message key={i} message={msg} setResChunks={setResChunks} setMsg={setMessages} />)}
      </div>
      <ChatForm socket={socket} />
    </div>
  );
}