import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import type { Socket } from 'socket.io-client';
import { CurrentAuthState } from '../../slices/authSlice';
import type { MutableRefObject, Dispatch, SetStateAction } from 'react';
import { handleChat } from '../../utils/chat';
import { MessageList } from '../../types';

export default function ChatForm({
  socket,
  setMessages,
}: {
  socket: MutableRefObject<Socket>;
  setMessages: Dispatch<SetStateAction<MessageList>>;
}) {
  const { register, handleSubmit, reset } = useForm();
  const { user } = useSelector(CurrentAuthState);
  return (
    <form
      className="absolute bottom-0 flex items-center justify-between w-5/6 px-4 py-2 rounded-lg"
      onSubmit={handleSubmit((e) => {
        setMessages((prev) => [
          ...prev,
          {
            username: user?.name,
            fromself: true,
            content: e.prompt,
            timestamp: new Date().toLocaleString(),
          },
        ]);
        handleChat({ prompt: e.prompt, socket });
        reset();
      })}
    >
      <input
        className="w-full mr-2 text-gray-800 bg-teal-50 rounded-lg dark:bg-gray-700 dark:text-gray-200 py-2 px-4"
        type="text"
        {...register('prompt', { required: true })}
        placeholder="Type a message..."
      />
      <input
        className="py-2 px-4 mx-2 text-white bg-teal-500 rounded-lg dark:bg-teal-700 dark:text-gray-200"
        type={'submit'}
        value={'Send'}
      />
    </form>
  );
}
