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
        var unit8 = new Uint8Array(data);
        var decoder = new TextDecoder('utf-8');
        var str = decoder.decode(unit8);
          try {
            str = str.replace("[DONE]", "");
            str = str.replace("data", "\"data\"");
            var json = JSON.parse(`{${str}}`);
            console.log(json);
          } catch (e) {
            console.log(e);
            console.log(str);
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