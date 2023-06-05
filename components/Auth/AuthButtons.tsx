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
                onClick={() => signIn('google', { callbackUrl: '/conversations' })}
                className="flex justify-center items-center mr-2 w-full rounded-md border border-none bg-slate-50 hover:shadow-md px-4 py-4 text-base font-semibold text-gray-700 transition-all duration-200 hover:bg-white focus:bg-white focus:text-black focus:outline-none dark:text-black">
                <FcGoogle className="h-5 w-5 mr-2" />
                <span className="uppercase">Continue with Google</span>
            </button>
        </div>
    )
}

export default AuthButtons;