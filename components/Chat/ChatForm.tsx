import { IoIosSend } from 'react-icons/io';
import { FaMicrophone } from "react-icons/fa";
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { CurrentAuthState } from '../../slices/authSlice';
import { handleChat } from '../../utils/chat';
import { useVoice } from '../../hooks';
import moment from 'moment';

export default function ChatForm({ socket, setMessages }: ChatFormProps) {
  const { register, handleSubmit, reset } = useForm();
  const { handleVoice, voiceMode, setVoiceMode } = useVoice(socket, setMessages);

  const { user } = useSelector(CurrentAuthState);
  
  return (
    <form
      className="absolute bottom-0 sm:w-3/4 w-11/12 flex items-center justify-between px-4 py-2 rounded-lg"
      onSubmit={handleSubmit((e) => {
        setMessages((prev: Message[]) => [
          ...prev,
          {
            username: user?.name,
            fromself: true,
            content: e.prompt,
            timestamp: moment().fromNow(),
          },
        ]);
        handleChat({ prompt: e.prompt, socket });
        reset();
      })}
    >
      {/* attech dropdown that allows to switch between text and voice mode */}
      <select
        className="rounded-l-lg p-2 bg-teal-500 dark:bg-teal-700 dark:text-gray-200 text-white hover:bg-blue-700 focus:outline-none"
        onChange={(e) => setVoiceMode(e.target.value === 'voice')}
      >
        <option defaultChecked value="text">Text</option>
        <option value="voice">Voice</option>
      </select>
      <input
        className="min-w-min w-full mr-2 text-gray-800 bg-teal-50 rounded-r-lg dark:bg-gray-700 dark:text-gray-200 py-2 px-4 disabled:opacity-50 focus:outline-none"
        type="text"
        {...register('prompt', { required: true })}
        placeholder={voiceMode ? 'Press and hold to record' : 'Type a message'}
        disabled={voiceMode}
      />
      <button
        className="ml-2 rounded-full p-2 bg-teal-500 dark:bg-teal-700 dark:text-gray-200 text-white hover:bg-blue-700 focus:outline-none"
        type={'submit'}
        value={'Send'}>
        {!voiceMode ? <IoIosSend className="h-5 w-5" /> : <FaMicrophone onMouseDown={handleVoice} onMouseUp={handleVoice} className="h-5 w-5" />}
      </button>
    </form>
  );
}
