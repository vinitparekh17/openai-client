export default function Message() {
    return (
        <>
            <div className="h-auto w-full block float-right my-4">
                <div className="float-right bg-teal-300 dark:bg-teal-700 rounded-lg shadow-md p-4 text-gray-700 dark:text-gray-300 w-60 sm:w-max">
                    <p className="font-bold text-black dark:text-white">Jone Doe</p>
                    <p className="break-words mb-1">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam dignissimos magni voluptate?</p>
                <div className="text-xs text-gray-500 dark:text-gray-400 text-right">12:00 PM</div>
                </div>
            </div>
            <div className="h-auto w-full block float-left my-4">
                <div className="float-left bg-gray-300 dark:bg-gray-700 rounded-lg shadow-md p-4 text-gray-700 dark:text-gray-300 w-60 sm:w-max">
                    <p className="font-bold text-black dark:text-white">Jone Doe</p>
                    <p className="break-words mb-1">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam dignissimos magni voluptate?</p>
                <div className="text-xs text-gray-500 dark:text-gray-400 text-left">12:00 PM</div>
                </div>
            </div>
        </>
    );
}