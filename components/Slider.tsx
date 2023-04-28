import { BiPlus } from 'react-icons/bi'
import { ReactElement } from 'react';
import BotCard from './BotCard'

export default function Slider({ children }: { children: ReactElement}) {
    return (
        <div className='flex'>
        <div className="flex flex-col-reverse overflow-y-scroll items-center w-24 h-[calc(100vh-4rem)] bg-gray-100 dark:bg-gray-800 scrollbar-custom">
            {/* create / add button */}
            <div className="fixed h-14 bottom-0 w-12 bg-gray-100 dark:bg-gray-800">
                <button className="p-2 h-12 my-1 rounded-full bg-teal-600 text-white text-[2rem] flex justify-center items-center shadow-md dark:bg-gray-700 dark:text-gray-300 hover:bg-teal-500 dark:hover:bg-gray-600">
                    <BiPlus />
                </button>
            </div>
            <BotCard />
            <BotCard />
            <BotCard />
            <BotCard />
            <BotCard />
            <BotCard />
            <BotCard />
            <BotCard />
            <BotCard />
            <BotCard />
            <BotCard />
            <BotCard />
            <BotCard />
            <BotCard />
            <BotCard />
            <BotCard />
            <BotCard />
            <BotCard />
            <BotCard />
            <BotCard />
            <BotCard />
            <BotCard />
            <BotCard />
            <BotCard />
            <BotCard />
            <BotCard />
            <BotCard />
            <BotCard />
            <BotCard />
            <BotCard />
            <BotCard />
            <BotCard />
            <BotCard />
        </div>
        <div className=" h-[calc(100vh-4rem)] w-full bg-gray-100 dark:bg-gray-800 overflow-y-scroll scrollbar-custom">
        {children}
        </div>
        </div>
    )
}