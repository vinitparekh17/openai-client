import { useRef, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router"
import { getConversation } from "../../utils/chat";
import type { MutableRefObject } from "react";
import { SocketIo } from "../../lib/socket";
import type { Socket } from "socket.io-client";
import ChatForm from "./ChatForm";
import Message from "./Message";
import type { ChunkObj, MessageList, OldMessage } from "../../types";
import { CurrentAuthState } from "../../slices/authSlice";

export default function ChatContainer() {
  const socket = useRef() as MutableRefObject<Socket>;
  const router = useRouter();
  const { id } = useSelector(CurrentAuthState);
  const [isFinished, setIsFinished] = useState(false);
  const [resChunks, setResChunks] = useState<string[]>([]);
  const [messages, setMessages] = useState<MessageList>([]);

  useEffect(() => {
    if (!socket.current) {
      socket.current = SocketIo;
      socket.current.connect();
    }
    return () => {
      if (socket.current && socket.current.connected) {
        socket.current.close();
      }
    }
  }, []);

  useEffect(() => {
      if (socket.current && socket.current.connected) {
        console.log("connected to socket");
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
  }, [socket, setIsFinished, setResChunks, isFinished, resChunks]);

  useEffect(() => {
    if (isFinished) {
      setTimeout(() => {
        setMessages(prev => [...prev, { username: "bot", fromself: false, content: resChunks.join(""), timestamp: new Date().toLocaleString() }])
        setIsFinished(false)
        setResChunks([])
      }, 1500)
    }
  }, [isFinished, setMessages, setIsFinished, setResChunks, resChunks])

  useEffect(() => {
    if (messages.length === 0) {
      getConversation(id)
        .then(res => res.json())
        .then(d => {
          let { data } = d as { data: OldMessage[] }
          data.map((d: OldMessage) => {
            setMessages(prev => [...prev, {
              username: "Vinit",
              content: d.prompt,
              fromself: true,
              timestamp: new Date().toLocaleString()
            }])
            setMessages(prev => [...prev, {
              username: "Bot",
              content: d.answer,
              fromself: false,
              timestamp: new Date().toLocaleString()
            }])
          })
        })
        .catch(err => console.log(err))
    }

  }, [messages.length, id, setMessages])

  return (
    <div className="flex flex-col h-full items-center justify-between container py-2">
      <div className="container px-3 overflow-y-scroll hiddenscroll">
        {messages.length > 0 && messages.map((message, i) => <Message key={i} message={message} />)}
        {resChunks.length > 0 && <Message chunks={resChunks} isFinished setResChunks={setResChunks} />}
      </div>
      <ChatForm socket={socket} setMessages={setMessages} />
    </div>
  );
}