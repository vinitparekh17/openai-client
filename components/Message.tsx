export default function Message() {
    return (
        <>
            <div className="max-w-[calc(100%-2rem)] w-full h-auto block float-right my-4 md:max-w-[calc(100%-7rem)] lg:max-w-[calc(100%-11rem)] sm:max-w-[calc(100%-4rem)]
            ">
                <div className="w-max float-right bg-teal-300 dark:bg-teal-700 rounded-lg shadow-md p-4 text-gray-700 dark:text-gray-300">
                    <p className="font-bold text-black dark:text-white">Jone Doe</p>
                    <p className="break-words mb-1">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam dignissimos magni voluptate?</p>
                <div className="text-xs text-gray-500 dark:text-gray-400 text-right">12:00 PM</div>
                </div>
            </div>
            <div className="max-w-[calc(100%-2rem)] w-full h-auto block float-left my-4 md:max-w-[calc(100%-7rem)] lg:max-w-[calc(100%-11rem)] sm:max-w-[calc(100%-4rem)]
            ">
                <div className="w-max float-left bg-gray-300 dark:bg-gray-700 rounded-lg shadow-md p-4 text-gray-700 dark:text-gray-300">
                    <p className="font-bold text-black dark:text-white">Jone Doe</p>
                    <p className="break-words mb-1">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam dignissimos magni voluptate?</p>
                <div className="text-xs text-gray-500 dark:text-gray-400 text-left">12:00 PM</div>
                </div>
            </div>
        </>
    );
}