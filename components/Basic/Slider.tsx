import type { OpenProps } from "../../types/siderbar";
import Image from "next/image";

export default function Slider({open}: OpenProps) {
    return (
        <div className={`h-[calc(100dvh - 4rem)] ${open ?'-translate-x-0' : '-translate-x-full' } transition-transform delay-200 mt-16  py-8 overflow-y-auto bg-teal-300 border-l border-r sm:w-64 w-60 dark:bg-gray-900 dark:border-gray-700`}>
            <h2 className="px-5 text-lg font-medium text-teal-800 dark:text-white">Accounts</h2>
            <div className="mt-8 space-y-4">
                <button className="flex items-center w-full px-5 py-2 transition-colors duration-200 dark:hover:bg-gray-800 gap-x-2 hover:bg-gray-100 focus:outline-none">
                    <Image className="object-cover w-8 h-8 rounded-full" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=faceare&facepad=3&w=688&h=688&q=100" width={50} height={50} alt="" />

                    <div className="text-left rtl:text-right">
                        <h1 className="text-sm font-medium text-teal-800 capitalize dark:text-white">Mia John</h1>

                        <p className="text-xs text-teal-600 dark:text-gray-400">11.2 Followers</p>
                    </div>
                </button>
            </div>
        </div>
    );
}