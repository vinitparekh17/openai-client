import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { CurrentAuthState } from '../../slices/authSlice';
import { handleChat } from '../../utils/chat';

export default function ChatForm({
  socket,
  setMessages,
}: ChatFormProps) {
  const { register, handleSubmit, reset } = useForm();
  const { user } = useSelector(CurrentAuthState);
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

      {/* //   <input
    //     className="w-full mr-2 text-gray-800 bg-teal-50 rounded-lg dark:bg-gray-700 dark:text-gray-200 py-2 px-4"
    //     type="text"
    //     {...register('prompt', { required: true })}
    //     placeholder="Type a message..."
    //   />
    //   <input
    //     className="py-2 px-4 mx-2 text-white bg-teal-500 rounded-lg dark:bg-teal-700 dark:text-gray-200"
    //     type={'submit'}
    //     value={'Send'}
    //   /> */}
      <div className="inline-flex items-center">
        <div className="flex">
          <select className="rounded-s-md px-2 py-1 focus:outline-none dark:bg-gray-600 dark:text-gray-200">
            <option className="dark:text-gray-300 hover:text-gray-600" value="text" selected>Text</option>
            <option className="dark:text-gray-300 hover:text-gray-600" value="voice">Voice</option>
          </select>
          <input
          type='text' 
          {...register('prompt', { required: true })}
          className="px-2 py-1 focus:outline-none text-gray-800 bg-teal-50 dark:bg-gray-700 dark:text-gray-200 w-full" placeholder="Type text..." />
        </div>
        <input type={'submit'} className="rounded-e-md bg-teal-500 dark:bg-teal-700 dark:text-gray-200 py-1 px-2 text-white hover:bg-blue-700 focus:outline-none" value={"Send"}/>
      </div>
    </form>
  );
}
