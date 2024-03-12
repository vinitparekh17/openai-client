import { useEffect, useRef, useState } from 'react';
import { SocketClient } from '../lib/socket';
import { useSelector } from 'react-redux';
import { CurrentAuthState } from '../slices/authSlice';
import { MutableRefObject } from 'react';
import type { Socket } from 'socket.io-client';
import { getConversation } from '../utils/chat';

export function useChat() {
  const socket = useRef<Socket>() as MutableRefObject<Socket>;
  const messageEndRef = useRef<HTMLDivElement>(null);
  const { id } = useSelector(CurrentAuthState);
  const [isFinished, setIsFinished] = useState(false);
  const [resChunks, setResChunks] = useState<string[]>([]);
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    if (id) {
      if (messages.length === 0) {
        getConversation(id)
          .then(res =>  res?.json())
          .then((d) => {
            let { data } = d as { data: OldMessage[] };
            data.map((d: OldMessage) => {
              setMessages((prev) => [
                ...prev,
                {
                  username: 'Vinit',
                  content: d.prompt,
                  fromself: true,
                  timestamp: new Date().toLocaleString(),
                },
              ]);
              setMessages((prev) => [
                ...prev,
                {
                  username: 'Bot',
                  content: d.answer,
                  fromself: false,
                  timestamp: new Date().toLocaleString(),
                },
              ]);
            });
          })
          .catch((err) => console.log("Er "+err));
      }
    }
  }, []);

  useEffect(() => {
    try {
      if (messageEndRef.current) {
        (messageEndRef.current as HTMLDivElement).scrollIntoView({ behavior: 'smooth' });
      }
      socket.current = SocketClient("https://api.omnisive.technetic.co.in", {
        transports: ['websocket'],
        secure: true,
        withCredentials: true,
      });

      socket.current.on("response-stream", (serverResponse) => {

        let res = JSON.parse(JSON.stringify(serverResponse));
        if (res) {
          setResChunks((prev) => [...prev, res.data]);
          setIsFinished(true);
        }
      });
    } catch (e) {
      console.log(`error: ${e}`);
    }

    return () => {
      if (socket.current.connected) {
        socket.current?.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    if (isFinished) {
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            username: 'bot',
            fromself: false,
            content: resChunks.join(''),
            timestamp: new Date().toLocaleString(),
          },
        ]);
        setIsFinished(false);
        setResChunks([]);
      }, 1500);
    }
  }, [isFinished, setMessages, setIsFinished, setResChunks, resChunks]);

  useEffect(() => {
    if (messageEndRef.current) {
      (messageEndRef.current as any).scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, messageEndRef.current, resChunks]);

  return {
    resChunks,
    messages,
    setMessages,
    setResChunks,
    isFinished,
    socket,
    messageEndRef,
  };
}
