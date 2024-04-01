import { useCallback, useEffect, useRef, useState } from 'react';
import moment from 'moment';
import { SocketClient } from '../lib/socket';
import { useSelector } from 'react-redux';
import { CurrentAuthState } from '../slices/authSlice';
import { MutableRefObject } from 'react';
import type { Socket } from 'socket.io-client';
import { getConversation } from '../utils/chat';

export function useChat() {
  const socket = useRef<Socket>() as MutableRefObject<Socket>;
  const messageEndRef = useRef<HTMLDivElement>(null);
  const { user } = useSelector(CurrentAuthState) as { user: UserData }
  const [isFinished, setIsFinished] = useState(false);
  const [resChunks, setResChunks] = useState<string[]>([]);
  const [messages, setMessages] = useState<Message[]>([]);

  const fetchChatHistory = useCallback(() => {

    getConversation(user.id)
    .then(({ data }: { data: OldMessage[] }) => {

      data.map((d: OldMessage) => {
        setMessages((prev) => [
          ...prev,
          {
            content: d.prompt,
            fromself: true,
            timestamp: moment(d.date).fromNow()
          },
        ]);

        setMessages((prev) => [
          ...prev,
          {
            content: d.answer,
            fromself: false,
            timestamp: moment(d.date).fromNow()
          },
        ]);

      });
    })
    .catch((err) => console.error('Er ' + err));
  }, [])

  useEffect(() => {
    if (user.id && messages.length === 0) {
      fetchChatHistory()
    }
  }, []);

  useEffect(() => {
    try {
      if (messageEndRef.current) {
        (messageEndRef.current as HTMLDivElement).scrollIntoView({
          behavior: 'smooth',
        });
      }
      socket.current = SocketClient(process.env.NEXT_PUBLIC_SOCKET_URI!, {
        transports: ['websocket'],
        secure: true,
        withCredentials: true,
        retries: 3
      });

      socket.current.on('response-stream', ({ type, answer, prompt, audioStream }: { type: string, answer: string, prompt: string, audioStream: Uint8Array }) => {
        if (type === 'TEXT') {
          setResChunks((prev) => [...prev, answer]);
          setIsFinished(true);
        } else if (type === 'AUDIO') {

          const arrayBuffer = new Uint8Array(audioStream).buffer;

          const blob = new Blob([arrayBuffer], { type: 'audio/mpeg' });
          const url = URL.createObjectURL(blob);

          const audio = new Audio(url);
          audio.volume = 0.8
          audio.play();

          audio.onended = () => {
            setTimeout(() => {
              URL.revokeObjectURL(url);
            } , 1000);
          }

          setMessages((prev: Message[]) => [...prev, {
            fromself: true,
            content: prompt,
            timestamp: moment().fromNow()
          }]);

          setMessages((prev: Message[]) => [...prev, {
            fromself: false,
            content: answer,
            timestamp: moment().fromNow()
          }]);
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
  }, [socket.current]);


  useEffect(() => {
    if (isFinished) {
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            fromself: false,
            content: resChunks.join(''),
            timestamp: moment().fromNow(),
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
