import { MutableRefObject } from 'react';
import type { Socket } from 'socket.io-client';
import { useFetch } from '../hooks';
import { toast } from 'react-hot-toast';

interface chatData {
  prompt: string;
  socket: MutableRefObject<Socket>;
}

export const handleChat = (data: chatData) => {
  let { prompt, socket } = data;
  socket.current.emit('request-stream', prompt);
};

export const getConversation = async (uid: string) => {
  // const NEXT_PUBLIC_BACKEND_URI = process.env.NEXT_PUBLIC_BACKEND_URI
  const { err, res } = await useFetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URI}/chat/${uid}`,
    {
      method: 'GET',
    }
  );
  if(err && !res) {
     toast.error(res.message);
     return null;
    } else {
      return res;
    }
};
