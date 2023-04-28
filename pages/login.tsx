'use client';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import AuthForm from '../components/AuthForm';
import AuthButtons from '../components/AuthButtons';
import { useSelector, useDispatch } from 'react-redux';
import { AuthSlice, CurrentAuthState } from '../slices/authSlice'
import { useEffect } from 'react';

export default function Login() {
    const {token} = useSelector(CurrentAuthState);
    const dispatch = useDispatch();
    useEffect(() => {
        if (!token && localStorage.getItem('token')) {
            dispatch(AuthSlice.actions.addToken({
                token: localStorage.getItem('token')!
            })
            )
        }
    }, [])
    const { status } = useSession();
    const router = useRouter();
    if (status === 'authenticated' || token) {
        router.push('/dashboard');
        return <p>Redirecting...</p>
    }
    return (
        <section className="dark:bg-gray-800 max-h-screen">
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <div
                    className="flex items-center justify-center h-screen">
                    <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
                        <h2
                            className="text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl">
                            Welcome back
                        </h2>
                        <AuthForm formType='signin' />
                        {/* or line */}
                        <div className='flex items-center justify-center mt-4'>
                            <div className='w-2/3 border-b dark:border-gray-700'></div>
                            <div className='mx-2 uppercase text-gray-500 dark:text-gray-400'>or</div>
                            <div className='w-2/3 border-b dark:border-gray-700'></div>
                        </div>

                        <AuthButtons />
                        <div className='flex justify-center'>
                            <p className="text-base mt-5 text-gray-600 dark:text-gray-300">
                                Don't have an account?
                                <Link
                                    href="/signup"
                                    className="font-medium text-indigo-600 transition-all duration-200 hover:text-indigo-700 hover:underline focus:text-indigo-700">
                                    &nbsp; Create a free account
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="h-full w-full hidden lg:block">
                    <img
                        className="mx-auto w-full h-screen object-cover"
                        src="https://images.unsplash.com/photo-1630673245362-f69d2b93880e?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1740&amp;q=80"
                        alt="login image" />
                </div>
            </div>
        </section>
    )
}