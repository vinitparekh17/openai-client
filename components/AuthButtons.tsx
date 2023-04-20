'use client';

import type { NextPage } from "next";
import { signIn } from "next-auth/react";
import { BsTwitter } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";

const AuthButtons: NextPage = () => {
    return (
        <div className="mt-4 flex justify-center">
            <button
                type="button"
                onClick={() => signIn('google')}
                className="flex justify-center items-center mr-2 w-36 rounded-md border border-none bg-gray-200 px-4 py-4 text-base font-semibold text-gray-700 transition-all duration-200 hover:bg-white focus:bg-white focus:text-black focus:outline-none dark:text-black">
                <FcGoogle className="h-5 w-5 mr-1" />
                <span>Google</span>
            </button>
            <button
                type="button"
                onClick={() => signIn('twitter')}
                className="flex justify-center items-center ml-2 w-36 rounded-md border border-none bg-sky-400 px-4 py-4 text-base font-semibold text-gray-200 transition-all duration-200 hover:bg-sky-300 focus:bg-sky-300 focus:text-white focus:outline-none dark:text-gray-100">
                <BsTwitter className="h-5 w-5 mr-1 text-white" />
                <span>Twitter</span>
            </button>
        </div>
    )
}

export default AuthButtons;