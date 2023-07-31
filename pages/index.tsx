import Link from 'next/link';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <main className="relative antialiased bg-white dark:bg-[#25292A] z-0 h-[100svh]">
      {/* <!-- Blobs --> */}
      <div className="absolute hidden md:block -left-40 -top-40 -z-20">
        <svg
          id="visual"
          viewBox="0 0 900 900"
          width="600"
          height="600"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
        >
          <g transform="translate(423.6017287294153 429.411998482734)">
            <path
              d="M164.8 -274.6C221 -253 278.9 -223.8 345.5 -176.7C412.1 -129.7 487.3 -64.8 476.3 -6.3C465.4 52.2 368.2 104.3 297.9 144.9C227.6 185.5 184.1 214.6 138.9 253C93.8 291.4 46.9 339.2 -6.9 351.1C-60.7 363.1 -121.3 339.2 -194.4 316.8C-267.4 294.5 -352.8 273.7 -394 221.2C-435.1 168.7 -432.1 84.3 -400.9 18C-369.7 -48.3 -310.4 -96.7 -267.6 -146.3C-224.8 -196 -198.4 -246.9 -156.5 -276.8C-114.7 -306.6 -57.3 -315.3 -1.5 -312.7C54.3 -310.1 108.7 -296.2 164.8 -274.6"
              fill="url(#gradient)"
            ></path>
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{ stopColor: '#00FF00' }} />
                <stop offset="100%" style={{ stopColor: '#00FF' }} />
              </linearGradient>
            </defs>
          </g>
        </svg>
      </div>

      <nav className="flex flex-row items-center justify-between px-4 md:px-20 py-10">
        {/* <!-- Small little logo :) --> */}
        <div className="relative flex flex-row space-x-1 items-center">
          <div className="absolute h-6 w-4 bg-blue-500 transform -skew-x-12 z-10"></div>
          <div className="absolute top-0 left-1 h-6 w-4 bg-green-500 transform -skew-x-12"></div>
          <h1 className="pl-5 text-2xl font-bold italic text-gray-50">
            AcePay
          </h1>
        </div>
        <div className="flex flex-row items-center space-x-8">
          <Link
            href="#"
            className="hidden md:block font-semibold text-gray-500 hover:text-green-500 transition duration-100 dark:text-gray-200 dark:hover:text-green-500"
          >
            Home
          </Link>
          <Link
            href="#"
            className="hidden md:block font-semibold text-gray-500 hover:text-green-500 transition duration-100 dark:text-gray-200 dark:hover:text-green-500"
          >
            Cards
          </Link>
          <Link
            href="#"
            className="hidden md:block font-semibold text-gray-500 hover:text-green-500 transition duration-100 dark:text-gray-200 dark:hover:text-green-500"
          >
            Payments
          </Link>
          <Link
            href="#"
            className="hidden md:block font-semibold text-gray-500 hover:text-green-500 transition duration-100 dark:text-gray-200 dark:hover:text-green-500"
          >
            Finance
          </Link>
          <div className="relative px-8 py-2 border border-gray-800 rounded-3xl bg-white hover:bg-green-600 text-gray-700 hover:text-white dark:border-gray-50">
            <div className="absolute inset-0 transform translate-x-1 translate-y-2 rounded-3xl border border-gray-800 dark:border-gray-50 px-8 py-2 -z-10"></div>
            <Link
              href="/login"
              className="relative font-light transition duration-100 transform hover:-translate-y-2 hover:-translate-x-1"
            >
              Login
            </Link>
          </div>
        </div>
      </nav>

      <header className="mt-4 md:mt-20 flex flex-col md:flex-row space-x-2 px-4 md:px-20">
        {/* <!-- Text container --> */}
        <div className="w-full md:w-1/2">
          <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold text-gray-800 dark:text-gray-50">
            International payments simplified, money at your{' '}
            <span className="font-thin tracking-wider">fingertips.</span>
          </h1>
          <p className="my-10 text-gray-800 font-light max-w-xl dark:text-gray-200">
            AcePay simplified international payments so that you don&apos;t have
            to worry about your money. Grab your licence and start earning
            today!
          </p>
          <div className="relative px-8 py-2 border rounded-3xl bg-white cursor-pointer inline-block">
            <div className="absolute inset-0 transform translate-x-1 translate-y-2 rounded-3xl border px-8 py-2 -z-10"></div>
            <Link
              href="#"
              className="relative text-gray-700 font-bold hover:text-green-500 transition duration-100 transform hover:-translate-y-2 hover:-translate-x-1"
            >
              Create Account
            </Link>
          </div>
        </div>

        {/* <!-- Image container --> */}
        <div
          className="hidden md:block w-full md:w-1/2"
          style={{ perspective: '800px' }}
        >
          <div
            className="rounded-xl overflow-hidden p-2 bg-white transform shadow-2xl"
            style={{
              transform: 'rotateX(40deg) rotateZ(6deg) rotateY(-10deg)',
            }}
          >
            <img
              className="rounded-lg"
              src="https://res.cloudinary.com/tailwindmasterkit/image/upload/v1627290155/assets/untitled-design-47png-a821832209.png"
              alt="img-container"
            />
          </div>
        </div>
      </header>
    </main>
  );
};

export default Home;
