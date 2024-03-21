import { useForm } from 'react-hook-form';
import { FaLock, FaCheckCircle } from 'react-icons/fa';
import { handleResetPassword } from '../../../utils/auth';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useMemo, useState } from 'react';

export default function PasswordReset() {

    const rules = {
        password: {
            required: 'Password is required',
            minLength: {
                value: 8,
                message: 'Password must be at least 8 characters',
            },
        },
        confirmPassword: {
            required: 'Confirm Password is required',
            validate: (value: string | undefined) =>
                value === watch('password') ? undefined : 'Passwords does not matched'
        }
    };

    const {
        register,
        handleSubmit,
        formState: { isSubmitting },
        watch
    } = useForm<{ password: string; confirmPassword: string }>();

    const router = useRouter();
    const { token } = router.query;

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 rounded-lg shadow-md bg-white">
                <h2 className="text-2xl font-semibold text-center mb-6">
                    Reset Password
                </h2>

                <form onSubmit={handleSubmit(({ password }) => handleResetPassword(router ,password, token as string))}>
                    <div className="flex items-center mb-4">
                        <FaLock className="mr-2 text-gray-500" />
                        <input
                            type="password"
                            placeholder="New Password"
                            {...register('password', rules.password)}
                            className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        />
                    </div>

                    <div className="flex items-center mb-6">
                        <FaCheckCircle className="mr-2 text-gray-500" />
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            {...register('confirmPassword', rules.confirmPassword)}
                            className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full p-3 rounded-md font-medium text-white ${isSubmitting
                            ? 'bg-gray-400 cursor-not-allowed'
                            : 'bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700'
                            }`}
                    >
                        {isSubmitting ? 'Submitting...' : 'Reset Password'}
                    </button>
                </form>
            </div>
        </div>
    );
}
