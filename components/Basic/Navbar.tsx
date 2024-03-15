import { Playfair } from '../fonts';

export default function Navbar({ setOpen, open }: NavbarProps) {

  return (
    <nav
      className="z-20 backdrop-filter backdrop-blur-lg bg-gradient-to-r from-teal-600 via-blue-700 to-slate-700
        dark:from-slate-700 dark:to-slate-900 absolute w-full mt-0"
    >
      <div className="mx-auto w-full px-4">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center">
            {open !== undefined && (
              <button
                type="button"
                onClick={() => setOpen!(!open)}
                className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-teal-700 dark:hover:bg-gray-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!open && (
                  <svg
                    className="block h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                )}
                {open && (
                  <svg
                    className="block h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            )}
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <h1
                className={`${Playfair.className} sm:ml-12 text-2xl text-white dark:text-gray-200`}
              >
                Omnisive
              </h1>
            </div>
          </div>
          {/* <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"></div> */}
          {/* <NavProfile session={session} token={token} user={user} /> */}
        </div>
      </div>
    </nav>
  );
}
