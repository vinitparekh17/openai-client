import { MutableRefObject } from 'react';
import type { Socket } from 'socket.io-client';
import { NEXT_PUBLIC_BACKEND_URI } from '../config';

interface chatData {
  prompt: string;
  socket: MutableRefObject<Socket>;
}

export const handleChat = (data: chatData) => {
  let { prompt, socket } = data;
  socket.current.emit('request-stream', prompt);
};

export const getConversation = async (uid: string) => {
  return fetch(`${NEXT_PUBLIC_BACKEND_URI}/api/chat/${uid}`, {
    method: 'GET',
    credentials: 'include',
  });
};
