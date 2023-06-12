import type { Dispatch, SetStateAction } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import type { Message as msg } from '../../types';

export default function Message({ chunks, message, setResChunks, isFinished }: { chunks?: string[], message?: msg, setResChunks?: Dispatch<SetStateAction<string[]>>, isFinished?: boolean }) {
    chunks && chunks.length > 0 && console.log(chunks.join(""));
    return (
        <>
            <div className="h-auto w-full block float-right my-4">
                <div className={`${message?.fromself ? `float-right bg-teal-300 dark:bg-teal-700` : `float-left bg-gray-300 dark:bg-gray-700`} rounded-lg shadow-md px-3 py-2 text-gray-700 dark:text-gray-300 w-60 sm:w-96 sm:max-w-2/3`}>
                    <p className="font-bold text-black dark:text-white">{message?.username}</p>
                    <p className="break-words mb-1 px-1 text-justify">
                        {chunks && chunks?.length > 0 ?
                            <Typewriter
                                words={[chunks.join("")]}
                                loop={1}
                                onLoopDone={() => {
                                    isFinished && setResChunks && setResChunks([])
                                    console.log(chunks && chunks);
                                }}
                                cursor
                                cursorStyle='_'
                                typeSpeed={50}
                                cursorBlinking={false}
                            /> : message?.content}
                    </p>
                    <div className="text-xs text-gray-500 dark:text-gray-400 text-right">{message?.timestamp}</div>
                </div>
            </div>
        </>
    );
}