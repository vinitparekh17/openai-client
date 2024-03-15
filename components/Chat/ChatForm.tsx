import { IoIosSend } from 'react-icons/io';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { CurrentAuthState } from '../../slices/authSlice';
import { handleChat } from '../../utils/chat';

export default function ChatForm({ socket, setMessages }: ChatFormProps) {
  const { register, handleSubmit, reset } = useForm();
  const { user } = useSelector(CurrentAuthState);

  return (
    <form
      className="absolute bottom-0 flex items-center justify-between w-5/6 px-4 py-2 rounded-lg"
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

      <input
        className="w-full mr-2 text-gray-800 bg-teal-50 rounded-lg dark:bg-gray-700 dark:text-gray-200 py-2 px-4"
        type="text"
        {...register('prompt', { required: true })}
        placeholder="Type a message..."
      />
      <button
        className="ml-2 rounded-full p-2 bg-teal-500 dark:bg-teal-700 dark:text-gray-200 text-white hover:bg-blue-700 focus:outline-none"
        type={'submit'}
        value={'Send'}>
        <IoIosSend className="h-5 w-5" />
      </button>
    </form>
  );
}
