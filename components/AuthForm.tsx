import { NextPage } from "next"
import { useForm } from "react-hook-form";
import { authSubmit } from "../api/auth";
import type { FormType, FormValues } from "../type/auth"
import Link from "next/link"

const AuthForm: NextPage<FormType> = ({ formType }) => {
    const rules = {
        password: {
            required: 'Password is required',
            minLength: {
                value: 8,
                message: 'Password must be at least 8 characters'
            }
        },
        confirmPassword: {
            required: 'Confirm Password is required',
            validate: (value: string | undefined) => value === watch("password") ? undefined : "Passwords do not match"
        }
    };
    const { register, handleSubmit, formState: { errors }, watch } = useForm<FormValues>();
    return (
        <form className="mt-8" onSubmit={handleSubmit(authSubmit)}>
            <input type="hidden" {...register("formType", { required: true })} value={formType} />
            <div className="space-y-5">
                {formType === 'signup' &&
                    <div className='grid grid-cols-2 gap-4'>
                        <div className=''>
                            <label
                                htmlFor="firstName"
                                className="text-base font-medium text-gray-900 dark:text-gray-200">
                                First Name
                            </label>
                            <div className="mt-2.5">
                                <input
                                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                                    type="text"
                                    {...register("firstName", { required: true })}
                                    placeholder="First Name" />
                                {errors.firstName && <span className='text-red-500'>This field is required</span>}
                            </div>
                        </div>
                        <div className=''>
                            <label
                                htmlFor="lastName"
                                className="text-base font-medium text-gray-900 dark:text-gray-200">
                                Last Name
                            </label>
                            <div className="mt-2.5">
                                <input
                                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                                    type="text"
                                    {...register("lastName", { required: true })}
                                    placeholder="Last Name" />
                                {errors.lastName && <span className='text-red-500'>This field is required</span>}
                            </div>
                        </div>
                    </div>
                }
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
                            {...register("email", { required: true })}
                            placeholder="Email" />
                        {errors.email && <span className='text-red-500'>Email is required field</span>}
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
                            className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                            type="password"
                            {...register("password", rules.password)}
                            placeholder="Password" />
                        {errors.password && <span className='text-red-500'>{errors.password.message}</span>}
                        {formType === 'signin' && <Link
                            href="/"
                            className="text-sm m-1 font-medium text-indigo-600 hover:text-indigo-700 hover:underline focus:text-indigo-700">
                            Forgot password?
                        </Link>}
                    </div>
                </div>
                {formType === 'signup' && <div>
                    <label
                        htmlFor="password"
                        className="text-base font-medium text-gray-900 dark:text-gray-200">
                        Confirm Password
                    </label>
                    <div className="mt-2.5">
                        <input
                            className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                            type="password"
                            {...register("confirmPassword", rules.confirmPassword)}
                            placeholder="Confirm Password" />
                        {errors.confirmPassword && <span className='text-red-500'>{errors.confirmPassword.message}</span>}
                        <Link
                            href="/"
                            className="text-sm m-1 font-medium text-indigo-600 hover:text-indigo-700 hover:underline focus:text-indigo-700">
                            Forgot password?
                        </Link>
                    </div>
                </div>}
                <div>
                    <button
                        type="submit"
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