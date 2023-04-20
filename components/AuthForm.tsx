import { NextPage } from "next"
import type { FormType } from "../type/auth"
import Link from "next/link"

export const SignUpFields = () => {
    return (
        <div className='grid grid-cols-2 gap-4'>
            <div className=''>
                <label
                    htmlFor="firstname"
                    className="text-base font-medium text-gray-900 dark:text-gray-200">
                    First Name
                </label>
                <div className="mt-2.5">
                    <input
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                        type="text"
                        placeholder="First Name" />
                </div>
            </div>
            <div className=''>
                <label
                    htmlFor="lastname"
                    className="text-base font-medium text-gray-900 dark:text-gray-200">
                    Last Name
                </label>
                <div className="mt-2.5">
                    <input
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                        type="text"
                        placeholder="Last Name" />
                </div>
            </div>
        </div>
    )
}

const AuthForm: NextPage<FormType> = ({ formType }) => {
    return (
        <form className="mt-8">
            <div className="space-y-5">
                {formType === 'signup' && <SignUpFields />}
                    <div>
                        <label
                            htmlFor="email"
                            className="text-base font-medium text-gray-900 dark:text-gray-200">
                            Email address
                        </label>
                        <div className="mt-2.5">
                            <input
                                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                                type="email"
                                placeholder="Email" />
                        </div>
                    </div>
                    <div>
                        <label
                            htmlFor="password"
                            className="text-base font-medium text-gray-900 dark:text-gray-200">
                            Password
                        </label>
                        <div className="mt-2.5">
                            <input
                                className="flex h-10 w-full mb-1 rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                                type="password"
                                placeholder="Password" />
                            <Link
                                href="/"
                                className="text-sm m-1 font-medium text-indigo-600 hover:text-indigo-700 hover:underline focus:text-indigo-700">
                                Forgot password?
                            </Link>
                        </div>
                    </div>
                    <div>
                        <button
                            type="button"
                            onClick={() => { window.location.href = '/dashboard' }}
                            className="inline-flex w-full items-center justify-center rounded-md bg-gradient-to-r from-teal-600 via-blue-600 to-indigo-600 hover:from-teal-500 hover:via-blue-500 hover:to-indigo-500 hover:translate-y-0.5 transform transition-all duration-200
                                        px-3.5 py-2.5 text-base font-semibold leading-7 text-white">
                            Sign in
                        </button>
                    </div>
                </div>
        </form>
    )
}

export default AuthForm;