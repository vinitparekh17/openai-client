import { FaUserLock } from 'react-icons/fa';
import Link from 'next/link';

export default function AccessDenied() {
  return (
    <div className="flex flex-col items-center justify-center h-[100dvh]">
      <div className="flex flex-col items-center justify-center">
        <FaUserLock className="text-9xl text-gray-500 dark:text-gray-400" />
        <h1 className="text-4xl text-gray-500 dark:text-gray-400">
          Access Denied
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mt-2">
          Login or Register to access this page.
        </p>
        <div className="flex flex-row items-center justify-center mt-2 text-white">
          <Link href="/login">
            <button
              className="bg-gradient-to-tr from-teal-400 to-blue-500 hover:from-teal-500 hover:to-blue-600
                         px-4 py-2 rounded-md mr-2"
            >
              Login
            </button>
          </Link>
          <Link href="/signup">
            <button
              className="bg-gradient-to-tr from-teal-400 to-blue-500 hover:from-teal-500 hover:to-blue-600
                         px-4 py-2 rounded-md"
            >
              Register
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
