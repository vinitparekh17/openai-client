import Image from 'next/image';
export default function ChatGreet() {
    return (
        <div className="flex flex-col items-center justify-center h-full bg-gray-100 dark:bg-gray-800">
            <div className="flex flex-col items-center justify-center">
                <Image src="/images/robot.gif" alt="robot" width={350} height={300} className='md:w-[300px] md:h-[350px] sm:w-[250px] sm:h-[300px] w-[200px] h-[250px]' />
                <h1 className="text-lg md:text-2xl font-bold text-gray-700 dark:text-gray-300">Start a new conversation</h1>
                <p className="text-gray-500 dark:text-gray-400 md:text-md lg:text-lg text-xs">Click on the plus button to start a new conversation</p>
            </div>
        </div>
    );
}