import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import AuthForm from '../components/Auth/AuthForm';
import AuthButtons from '../components/Auth/AuthButtons';
import { useSelector, useDispatch } from 'react-redux';
import { AuthSlice, CurrentAuthState } from '../slices/authSlice';
import { useEffect } from 'react';
import MyHead from '../components/Basic/Head';

export default function Login() {
  const { token } = useSelector(CurrentAuthState);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!token && localStorage.getItem('token')) {
      dispatch(
        AuthSlice.actions.addToken({
          token: localStorage.getItem('token')!,
        })
      );
    }
  }, [token, dispatch]);
  const { status } = useSession();
  const router = useRouter();
  if (status === 'authenticated' || token) {
    router.push('/conversations');
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    );
  }
  return (
    <>
      <MyHead />
      <div className="h-screen md:flex">
        <div className="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-blue-800 to-purple-700 dark:from-slate-800 dark:to-slate-900 justify-around items-center hidden">
          <div className="w-1/2">
            <h1 className="font-bold text-4xl font-sans">Omnisive</h1>
            <p className="mt-1">Pre trained general purpose chat system</p>
            <button
              type="submit"
              className="block w-28 bg-white text-indigo-800 dark:bg-gray-700 dark:border-indigo-900 dark:text-indigo-300 mt-4 py-2 rounded-2xl font-bold mb-2"
            >
              Read More
            </button>
          </div>
          <div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
          <div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
          <div className="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
          <div className="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        </div>
        <div className="flex md:w-1/2 justify-center py-10 items-center">
          <div className="w-1/2">
            <AuthForm formType="signin" />
            <AuthButtons />
          </div>
        </div>
      </div>
    </>
  );
}
