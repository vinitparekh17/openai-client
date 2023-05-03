import Link from 'next/link';
import { BiPlus } from 'react-icons/bi';
import { ReactElement } from 'react';
import BotCard from '../Bot/BotCard'
import ChatForm from '../Chat/ChatForm';

export default function Slider({ children }: { children: ReactElement}) {
    return (
        <div className='flex'>
        <div className="flex flex-col-reverse overflow-y-scroll items-center w-24 mt-16 h-[calc(100vh-4rem)] scrollbar-custom bg-teal-200 dark:bg-teal-900 dark:text-teal-300">
            {/* create / add button */}
            <div className="fixed h-14 bottom-0 w-12">
                <Link href="/bot/create">
                <button className="p-2 h-12 my-1 rounded-full text-teal-600  hover:text-white text-[2rem] flex justify-center items-center shadow-md bg-teal-100 dark:bg-teal-800 dark:text-teal-300 dark:hover:bg-teal-500 dark:hover:text-white">	    
                    <BiPlus />
                </button>
                </Link>
            </div>
            <div className="h-14"></div>
            <BotCard />
            <BotCard />
            <BotCard />
        </div>
        <div className="mt-16 overflow-y-hidden w-full bg-gray-100 dark:bg-gray-700">
        {children}
        </div>
        </div>
    )
}