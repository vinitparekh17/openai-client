import Link from 'next/link';
import Image from 'next/image';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CurrentAuthState } from '../slices/authSlice';
import { AuthSlice } from '../slices/authSlice';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import AuthButtons from '../components/AuthButtons';
import AuthForm from '../components/AuthForm';
import Or from '../components/OrDivider';
import MyHead from '../components/Head';

export default function Signup() {
    const { token } = useSelector(CurrentAuthState);
    const dispatch = useDispatch();
    useEffect(() => {
        if (!token && localStorage.getItem('token')) {
            dispatch(AuthSlice.actions.addToken({
                token: localStorage.getItem('token')!
            })
            )
        }
    }, [token, dispatch])
    const { status } = useSession();
    const router = useRouter();
    if (status === 'authenticated' || token) {
        router.push('/conversations');
        return <p>Redirecting...</p>
    }
    return (
        <>
            <MyHead />
            <main className="dark:bg-gray-800 max-h-screen">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div
                        className="flex items-center justify-center h-screen px-4 py-2">
                        <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
                            <h2
                                className="text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl">
                                Create your account
                            </h2>
                            <AuthForm formType='signup' />
                            <Or />
                            <AuthButtons />
                            <div className='flex justify-center'>
                                <p className="text-base mt-5 text-gray-600 dark:text-gray-300">
                                    Already have an account?
                                    <Link
                                        href="/login"
                                        className="font-medium text-indigo-600 transition-all duration-200 hover:text-indigo-700 hover:underline focus:text-indigo-700">
                                        &nbsp; login
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="h-full w-full hidden lg:block">
                        <Image
                            className="mx-auto w-full h-screen object-cover"
                            height={1080}
                            width={1920}
                            src="https://images.unsplash.com/photo-1630673245362-f69d2b93880e?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1740&amp;q=80"
                            alt="login image" />
                    </div>
                </div>
            </main>
        </>
    )
}