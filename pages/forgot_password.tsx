import Link from "next/link";
import { handleForgotPassword } from '../utils/auth';
import { IoIosMail } from "react-icons/io";
import { useForm } from "react-hook-form";

const ForgotPasswordPage = () => {

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<{email: string}>();

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-md bg-white p-3 rounded-lg space-y-8 shadow-lg">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Forgot your password?
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        No problem. We can send you a link to reset your password.
                    </p>
                </div>
                <form className="space-y-6" onSubmit={handleSubmit(({ email }) => handleForgotPassword(email))}>
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div className="relative">
                            <input
                                id="email"
                                type="email"
                                autoComplete="email"
                                {...register('email', { required: true })}
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:ring-w-1 focus:ring-opacity-50 text-gray-700"
                                placeholder="Email address"
                            />
                            <span className="absolute inset-y-0 right-3 flex items-center pr-2">
                                <IoIosMail className="h-5 w-5 text-gray-400" />
                            </span>
                        </div>
                        {errors.email && (
                            <p className="text-red-500 text-sm">{errors.email.message}</p>
                        )}
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="text-sm">
                            <Link href="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
                                Back to sign in
                            </Link>
                        </div>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="inline-flex items-center px-4 py-2 bg-indigo-500 font-medium text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            {isSubmitting ? 'Sending...' : 'Send me a reset link'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ForgotPasswordPage;
