'use client';

import type { NextPage } from "next";
import { signIn } from "next-auth/react";
import { BsTwitter } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";

const AuthButtons: NextPage = () => {
    return (
        <div className="mt-4 space-y-3">
            <button
                type="button"
                onClick={() => signIn('google')}
                className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-500 bg-white px-4 py-4 text-base font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none dark:text-gray-400">
                <div className="absolute inset-y-0 left-0 p-4">
                    <FcGoogle className="h-6 w-6" />
                </div>
                Sign in with Google
            </button>
            <button
                type="button"
                onClick={() => signIn('twitter')}
                className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-500 bg-white px-4 py-4 text-base font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none dark:text-gray-400">
                <div className="absolute inset-y-0 left-0 p-4">
                    <BsTwitter className="h-6 w-6 text-[#1DA1F2]" />
                </div>
                Sign in with Twitter
            </button>
        </div>
    )
}

export default AuthButtons;