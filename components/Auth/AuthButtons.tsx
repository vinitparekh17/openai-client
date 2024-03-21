'use client';

import type { NextPage } from 'next';
import { signIn } from 'next-auth/react';
import { FcGoogle } from 'react-icons/fc';

const AuthButtons: NextPage = () => {
  return (
    <div className="mt-4 flex justify-center">
      <button
        type="button"
        onClick={() => signIn('google')}
        className="flex items-center justify-center w-full bg-white shadow-md border-2 border-gray-300 py-2 rounded-2xl text-gray-700 font-semibold mb-2 dark:bg-gray-700 dark:hover:bg-gray-900 dark:focus:bg-gray-800 dark:active:bg-gray-800 dark:text-white"
      >
        <FcGoogle className="h-5 w-5 mr-2" />
        <span className="uppercase">Sign-in with Google</span>
      </button>
    </div>
  );
};

export default AuthButtons;
