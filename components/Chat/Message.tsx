import type { Dispatch, SetStateAction } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import Image from 'next/image';
import type { Message as msg } from '../../types';

export default function Message({
  chunks,
  message,
  setResChunks,
  isFinished,
}: {
  chunks?: string[];
  message?: msg;
  setResChunks?: Dispatch<SetStateAction<string[]>>;
  isFinished?: boolean;
}) {
  const getTimein12 = (time: any) => {
    return new Date(time).toLocaleString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    });
  };
  return (
    <>
      {/* <div className="h-auto w-full block float-right my-4">
        <div
          className={`${
            message?.fromself
              ? `float-right bg-teal-300 dark:bg-teal-700 shadow-teal-400 dark:shadow-teal-500`
              : `float-left bg-gray-300 dark:bg-gray-700 shadow-gray-400 dark:shadow-gray-500`
          } rounded-lg shadow-md px-3 py-2 text-gray-700 dark:text-gray-300 w-60 sm:w-96 sm:max-w-2/3`}
        >
          <p className="font-bold text-black dark:text-white">
            {message?.username}
          </p>
          <p className="break-words mb-1 px-1 text-start">
            {chunks && chunks?.length > 0 ? (
              <Typewriter
                words={[chunks.join('')]}
                loop={1}
                onLoopDone={() =>
                  isFinished && setResChunks && setResChunks([])
                }
                cursor
                cursorStyle="_"
                typeSpeed={50}
                cursorBlinking={false}
              />
            ) : (
              message?.content
            )}
          </p>
          <div className="text-xs text-gray-500 dark:text-gray-400 text-right">
            {message?.timestamp}
          </div>
        </div>
      </div> */}
      {/* <div className={`chat chat-${message?.fromself ? 'start' : 'end'}`}>
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img src={`/images/m-1.webp`} alt='user' height={200} width={200} />
          </div>
        </div>
        <div className="chat-header">
          {message?.username}
          <time className="ml-1 text-xs opacity-50">{getTimein12(message?.timestamp)}</time>
        </div>
        <div className="chat-bubble bg-gray-300 text-gray-900 dark:bg-gray-700 dark:text-gray-400">
          {chunks && chunks?.length > 0 ? (
            <Typewriter
              words={[chunks.join('')]}
              loop={1}
              onLoopDone={() =>
                isFinished && setResChunks && setResChunks([])
              }
              cursor
              cursorStyle="_"
              typeSpeed={50}
              cursorBlinking={false}
            />
          ) : (
            message?.content
          )}
        </div>
      </div> */}
      <div className={`chat chat-${message?.fromself ? 'end' : 'start'}`}>
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img src="/images/bot-2.webp" />
          </div>
        </div>
        <div className="chat-header">
          {message?.username}
          {/* <time className="text-xs opacity-50">{getTimein12(message?.timestamp)}</time> */}
        </div>
        <div className="chat-bubble dark:bg-gray-700 bg-gray-300 dark:text-gray-400 text-gray-800">
          {chunks && chunks?.length > 0 ? (
            <Typewriter
              words={[chunks.join('')]}
              loop={1}
              onLoopDone={() => isFinished && setResChunks && setResChunks([])}
              cursor
              cursorStyle="_"
              typeSpeed={50}
              cursorBlinking={false}
            />
          ) : (
            message?.content
          )}
        </div>
      </div>
    </>
  );
}
