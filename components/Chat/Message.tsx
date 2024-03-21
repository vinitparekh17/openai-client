import React from 'react';
import type { Dispatch, SetStateAction } from 'react';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkReact from 'remark-react';
import Image from 'next/image';
import { Typewriter } from 'react-simple-typewriter';

export default function Message({
  chunks,
  message,
  setResChunks,
  isFinished,
}: {
  chunks?: string[];
  message?: Message;
  setResChunks?: Dispatch<SetStateAction<string[]>>;
  isFinished?: boolean;
}) {
  return (
    <>
      <div className="h-auto lg:w-11/12 w-5/6 block float-right my-4">
        <div className={`mb-4 flex ${message?.fromself && 'text-right'}`}>
          {!message?.fromself && (
            <div className="flex-2">
              <div className="w-12 h-12 relative sm:block hidden">
                <Image
                  className="w-12 h-12 rounded-full mx-auto"
                  width={400}
                  height={400}
                  src={`/images/avatars/bot-1.webp`}
                  alt="chat-user"
                />
                <span className="absolute w-4 h-4 bg-green-500 rounded-full right-0 bottom-0 border-2 border-green-500"></span>
              </div>
            </div>
          )}
          <div className="flex-1 px-2 overflow-x-scroll hiddenscroll">
            <div
              className={`inline-block max-w-fit ${message?.fromself
                  ? 'bg-blue-600 dark:bg-blue-900 text-white'
                  : 'bg-gray-300 dark:bg-slate-700 text-gray-600 dark:text-gray-400'
                } rounded-3xl py-3 px-4 text-left`}
            >
              {!message?.fromself && <p className="text-xs font-semibold text-gray-500 sm:hidden">Assistent</p>}
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
                !message?.fromself ?
                  (unified()
                    .use(remarkParse)
                    .use(remarkReact as any, React)
                    .processSync(message?.content).result as any) : message?.content
              )}
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              {message?.timestamp}
              </div>
          </div>
        </div>
      </div>
    </>
  );
}
