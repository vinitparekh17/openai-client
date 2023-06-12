import { useRef, useEffect, useState } from "react";
import type { MutableRefObject } from "react";
import { SocketIo } from "../../lib/socket";
import type { Socket } from "socket.io-client";
import ChatForm from "./ChatForm";
import Message from "./Message";
import type { ChunkObj, MessageList } from "../../types";

export default function ChatContainer() {
  const socket = useRef() as MutableRefObject<Socket>;
  const [isFinished, setIsFinished] = useState(false);
  const [resChunks, setResChunks] = useState<string[]>([]);
  const [messages, setMessages] = useState<MessageList>([]);

  useEffect(() => {
    socket.current = SocketIo;
    if (socket.current.connected) {
      console.log("connected");
      socket.current.on("response-stream", data => {
        try {
          let parsed: ChunkObj = JSON.parse(data);
          if (parsed.data) {
            setIsFinished(false)
            setResChunks(prev => [...prev, parsed!.data.choices[0].delta?.content!]);
          } else {
            setIsFinished(true)
          }
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


  useEffect(() => {
    if (isFinished) {
      setTimeout(() => {
        setMessages(prev => [...prev, { username: "bot", fromself: false, content: resChunks.join(""), timestamp: new Date().toLocaleString() }])
        setIsFinished(false)
        setResChunks([])
      }, 1500)
    }
  }, [isFinished, setMessages, setIsFinished, setResChunks])

  return (
    <div className="flex flex-col h-full items-center justify-between container py-2">
      <div className="container px-3 overflow-y-scroll scrollbar-custom">
        {messages.length > 0 && messages.map((message, i) => <Message key={i} message={message} />)}
        {resChunks.length > 0 && <Message chunks={resChunks} isFinished setResChunks={setResChunks} />}
      </div>
      <ChatForm socket={socket} setMessages={setMessages} />
    </div>
  );
}