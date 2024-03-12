import { MutableRefObject } from 'react';
import type { Socket } from 'socket.io-client';
import { NEXT_PUBLIC_BACKEND_URI } from '../config';
import { useFetch } from '../hooks';

interface chatData {
  prompt: string;
  socket: MutableRefObject<Socket>;
}

export const handleChat = (data: chatData) => {
  let { prompt, socket } = data;
  socket.current.emit('request-stream', prompt);
};

export const getConversation = async (uid: string) => {
  const { err, res } = await useFetch(
    `${NEXT_PUBLIC_BACKEND_URI}/chat/${uid}`,
    {
      method: 'GET',
    }
  );
  return err && !res ? null : res;
};
