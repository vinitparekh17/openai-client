import { IoIosSend } from 'react-icons/io';
import { MdKeyboardVoice } from 'react-icons/md';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { CurrentAuthState } from '../../slices/authSlice';
import { handleChat } from '../../utils/chat';

export default function ChatForm({ socket, setMessages }: ChatFormProps) {
  const { register, handleSubmit, reset } = useForm();
  const { user } = useSelector(CurrentAuthState);
  const [isVoice, setIsVoice] = useState(false);

  const handleVoice = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setIsVoice(e.target.value === 'voice');
  };

  return (
    <form
      className="absolute bottom-2 flex items-center"
      onSubmit={handleSubmit((e) => {
        setMessages((prev: Message[]) => [
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
      <div className="inline-flex items-center">
        <div className="flex">
          <select
            className="rounded-s-md px-2 py-1 focus:outline-none dark:bg-gray-600 dark:text-gray-200"
            defaultValue={'text'}
            onChange={handleVoice}
          >
            <option
              className="dark:text-gray-300 hover:text-gray-600"
              value="text"
            >
              Text
            </option>
            <option
              className="dark:text-gray-300 hover:text-gray-600"
              value="voice"
            >
              Voice
            </option>
          </select>
          <input
            type="text"
            {...register('prompt', { required: true })}
            disabled={isVoice}
            className="px-2 py-1 focus:outline-none text-gray-800 bg-teal-50 dark:bg-gray-700 dark:text-gray-200 w-full"
            placeholder={isVoice ? 'Speak to chat' : 'Type a message'}
          />
        </div>
        <button
          type={'submit'}
          className="ml-2 rounded-full p-2 bg-teal-500 dark:bg-teal-700 dark:text-gray-200 text-white hover:bg-blue-700 focus:outline-none"
        >
          {isVoice ? (
            <MdKeyboardVoice className="h-4 w-4" />
          ) : (
            <IoIosSend className="h-4 w-4" />
          )}
        </button>
      </div>
    </form>
  );
}
