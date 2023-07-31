import { useEffect, useRef, useState } from 'react';
import { SocketClient } from '../lib/socket';
import { useSelector } from 'react-redux';
import { CurrentAuthState } from '../slices/authSlice';
import { MutableRefObject } from 'react';
import type { Socket } from 'socket.io-client';
import { NEXT_PUBLIC_BACKEND_URI } from '../config';
import { getConversation } from '../utils/chat';

export function useChat() {
  const socket = useRef<Socket>() as MutableRefObject<Socket>;
  const messageEndRef = useRef<HTMLDivElement>(null);
  const { id } = useSelector(CurrentAuthState);
  const [isFinished, setIsFinished] = useState(false);
  const [resChunks, setResChunks] = useState<string[]>([]);
  const [messages, setMessages] = useState<MessageList>([]);

  useEffect(() => {
    if (id) {
      if (messages.length === 0) {
        getConversation(id)
          .then((res) => res.json())
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
          .catch((err) => console.log(err));
      }
    }
  }, []);

  useEffect(() => {
    if (messageEndRef.current) {
      (messageEndRef.current as any).scrollIntoView({ behavior: 'smooth' });
    }
    socket.current = SocketClient(NEXT_PUBLIC_BACKEND_URI!, {
      transports: ['websocket'],
      secure: true,
      withCredentials: true
    });
    return () => {
      if (socket.current.connected) {
        socket.current?.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    if (socket.current && socket.current.connected) {
      socket.current.on('response-stream', (data) => {
        try {
          let parsed: ChunkObj = JSON.parse(data);
          if (parsed.data) {
            setIsFinished(false);
            setResChunks((prev) => [
              ...prev,
              parsed!.data.choices[0].delta?.content!,
            ]);
          } else {
            setIsFinished(true);
          }
        } catch (e) {
          console.log(
            `error: ${e}\n str: ${JSON.stringify(data)}\n data: ${data}`
          );
        }
      });
    }
  }, [socket.current, setResChunks, setIsFinished]);

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
