import Image from 'next/image';
import Link from 'next/link';
import type { NextPage } from 'next';
import Navbar from '../components/Basic/Navbar';

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center h-screen">
        <div className="mt-10 max-w-screen-xl mx-auto px-5">
          <div className="grid lg:grid-cols-2 place-items-center pt-16 pb-8 md:pt-8">
            <div className="py-6 md:order-1 hidden md:block">
              <Image
                src="/images/hero.png"
                width={600}
                height={600}
                style={{ filter: 'drop-shadow(0 0 0.75rem #000)' }}
                alt="Astronaut in the air"
              />
            </div>
            <div>
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold lg:tracking-tight">
                Empower yourself with Omnisive
              </h1>
              <p className="text-lg mt-4 text-slate-600 dark:text-slate-400 max-w-xl">
                {/* Astroship is a starter template for startups, marketing websites & landing
            pages.<wbr /> Built with Astro.build, TailwindCSS & Alpine.js. You can quickly
            create any website with this starter. */}
                Omnisive is the most advanced AI chatbot that can help you with
                your daily tasks and answer your questions. <wbr /> It is a
                pre-trained general purpose chat system that can understand and
                answer any question you ask.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/login"
                  className="rounded text-center transition focus-visible:ring-2 ring-offset-2 ring-gray-200 bg-white border-2 border-black hover:bg-gray-100 text-black lg:px-5 lg:py-2.5 md:px-4 md:py-2"
                  target="_blank"
                >
                  Login
                </Link>
                <Link
                  href="/signup"
                  className="rounded text-center transition focus-visible:ring-2 ring-offset-2 ring-gray-200 bg-black text-white hover:bg-gray-800  border-2 border-transparent lg:px-5 lg:py-2.5 md:px-4 md:py-2"
                  target="_blank"
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
