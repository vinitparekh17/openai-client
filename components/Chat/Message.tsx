import { useEffect } from 'react';
import { Typewriter } from 'react-simple-typewriter';
export default function Message({ chunks, setResChunks, fromSelf, message, setMsg }: { chunks?: string[], fromSelf?: boolean, message?: string, setResChunks: any, setMsg: any }) {
    fromSelf = fromSelf ?? false;
    let resString: string = "";
    resString += chunks && chunks.length > 0 ? chunks.join(" ") : "";
    return (
        <>
            <div className="h-auto w-full block float-right my-4">
                <div className={`${fromSelf ? `float-right bg-teal-300 dark:bg-teal-700` : `float-left bg-gray-300 dark:bg-gray-700`} rounded-lg shadow-md p-4 text-gray-700 dark:text-gray-300 w-60 sm:w-max`}>
                    <p className="font-bold text-black dark:text-white">Assistant</p>
                    <p className="break-words mb-1">
                        {/* {chunks && chunks.length > 0 ? <Typewriter
                            words={[resString] || ["Hello, how are you?"]}
                            loop={1}
                            onLoopDone={() => setResChunks([])}
                            cursor
                            cursorStyle='_'
                            typeSpeed={100}
                            delaySpeed={1000}
                            cursorBlinking={false}
                        /> : message
                    } */} hello world
                    </p>
                    <div className="text-xs text-gray-500 dark:text-gray-400 text-right">12:00 PM</div>
                </div>
            </div>
        </>
    );
}