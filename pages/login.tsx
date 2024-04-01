import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import Or from '../components/Basic/OrDivider';
import Link from 'next/link';
import Image from 'next/image';
import AuthForm from '../components/Auth/AuthForm';
// import AuthButtons from '../components/Auth/AuthButtons';
import { useDispatch, useSelector } from 'react-redux';
import { AuthSlice, CurrentAuthState } from '../slices/authSlice';
import MyHead from '../components/Basic/Head';
import { useCallback, useEffect } from 'react';

export default function Login() {

  const { user } = useSelector(CurrentAuthState) as { user: UserData }
  const { status } = useSession();

  const dispatch = useDispatch();
  const router = useRouter();

  const fetchProfile = useCallback(() => {
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_URI}/user/profile`, {
      method: 'GET',
      credentials: 'include',
    })
      .then((res) => {
        if (!res.ok) {
          return;
        }
        res.json()
          .then(({ data }) => {
            dispatch(AuthSlice.actions.updateProfile({
              id: data._id,
              email: data.email,
              name: data.name,
              profile: data.profile
            }));
          })
      })
      .catch((err) => {
        console.error("Error: " + err);
      });
  }, [])

  useEffect(() => {
    if (!user.id) {
      fetchProfile()
    }
  }, [user.id, dispatch])

  if (status === 'authenticated' || user.id) {
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
      <main className="dark:bg-gray-800 max-h-screen bg-slate-100">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="flex items-center justify-center h-screen px-4 py-2">
            <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
              <h2 className="text-3xl font-bold leading-tight text-teal-700 dark:text-white sm:text-4xl">
                Login to your account
              </h2>
              <AuthForm formType="signin" />
              <Or />
              {/* <AuthButtons /> */}
              <div className="flex justify-center">
                <p className="text-base mt-5 text-gray-600 dark:text-gray-300">
                  Do not have an account?
                  <Link
                    href="/signup"
                    className="font-medium text-indigo-600 transition-all duration-200 hover:text-indigo-700 hover:underline focus:text-indigo-700"
                  >
                    &nbsp; Sign-Up
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="h-full w-full hidden lg:block">
            <Image
              className="mx-auto w-full h-screen object-cover filter contrast-75"
              height={980}
              width={1020}
              src="/images/login-img.jpg"
              alt="login image"
            />
            <a href="https://www.freepik.com/free-vector/privacy-policy-concept-illustration_20547283.htm#query=login&position=0&from_view=keyword&track=sph&uuid=9a59316a-daa0-49ec-9d45-fdb58ae43934">Image by storyset</a> on Freepik
          </div>
        </div>
      </main>
    </>
  );
}
