import { Typewriter } from 'react-simple-typewriter';
export default function Message({ messages, fromSelf }: { messages?: string[], fromSelf?: boolean }) {
    fromSelf = fromSelf ?? false;
    return (
        <>
            <div className="h-auto w-full block float-right my-4">
                <div className={`${fromSelf ?`float-right bg-teal-300 dark:bg-teal-700`: `float-left bg-gray-300 dark:bg-gray-700`} rounded-lg shadow-md p-4 text-gray-700 dark:text-gray-300 w-60 sm:w-max`}>
                    <p className="font-bold text-black dark:text-white">Jone Doe</p>
                    <p className="break-words mb-1">
                        {!fromSelf ?
                            <Typewriter
                        words={messages && messages.length > 0 ? messages : ["Hello, how are you?"]}
                        loop={1}
                        cursor
                        cursorStyle='_'
                        typeSpeed={100}
                        delaySpeed={1000}
                        cursorBlinking={false}
                        /> : messages && messages.length > 0 ? messages[0] : "Hello, how are you?"
                    }
                        </p>
                    <div className="text-xs text-gray-500 dark:text-gray-400 text-right">12:00 PM</div>
                </div>
            </div>
        </>
    );
}