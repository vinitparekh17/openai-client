import { useForm } from 'react-hook-form';
import { authSubmit } from '../../utils/auth';
import Link from 'next/link';

export default function AuthForm({ formType }: FormType ) {
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
        value === watch('password') ? undefined : 'Passwords do not match',
    },
  };
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
  } = useForm<FormValues>();
  return (
    <form className="mt-8" onSubmit={handleSubmit(data => authSubmit('normal', data))}>
      <input
        type="hidden"
        {...register('formType', { required: true })}
        value={formType}
      />
      <div className="space-y-5">
        {formType === 'signup' && (
          <div className="grid grid-cols-2 gap-4">
            <div className="">
              <label
                htmlFor="firstName"
                className="text-base font-medium text-gray-900 dark:text-gray-200"
              >
                First Name
              </label>
              <div className="mt-2.5">
                <input
                  className="flex h-10 w-full text-gray-700 bg-white dark:bg-slate-600 rounded-md shadow-lg bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                  type="text"
                  {...register('firstName', { required: true })}
                  placeholder="First Name"
                />
                {errors.firstName && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
            </div>
            <div className="">
              <label
                htmlFor="lastName"
                className="text-base font-medium text-gray-900 dark:text-gray-200"
              >
                Last Name
              </label>
              <div className="mt-2.5">
                <input
                  className="flex h-10 w-full text-gray-700 bg-white dark:bg-slate-600 rounded-md shadow-lg bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                  type="text"
                  {...register('lastName', { required: true })}
                  placeholder="Last Name"
                />
                {errors.lastName && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
            </div>
          </div>
        )}
        <div>
          <label
            htmlFor="email"
            className="text-base font-medium text-gray-900 dark:text-gray-200"
          >
            Email address
          </label>
          <div className="mt-2.5">
            <input
              className="flex h-10 w-full text-gray-700 bg-white dark:bg-slate-600 rounded-md shadow-lg bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
              type="email"
              {...register('email', { required: true })}
              placeholder="Email"
            />
            {errors.email && (
              <span className="text-red-500">Email is required field</span>
            )}
          </div>
        </div>
        <div>
          <label
            htmlFor="password"
            className="text-base font-medium text-gray-900 dark:text-gray-200"
          >
            Password
          </label>
          <div className="mt-2.5">
            <input
              className="flex h-10 w-full text-gray-700 bg-white dark:bg-slate-600 rounded-md shadow-lg bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
              type="password"
              {...register('password', rules.password)}
              placeholder="Password"
            />
            {errors.password && (
              <span className="text-red-500">{errors.password.message}</span>
            )}
            {formType === 'signin' && (
              <Link
                href="/"
                className="text-sm m-1 font-medium text-indigo-600 hover:text-indigo-700 hover:underline focus:text-indigo-700"
              >
                Forgot password?
              </Link>
            )}
          </div>
        </div>
        {formType === 'signup' && (
          <div>
            <label
              htmlFor="password"
              className="text-base font-medium text-gray-900 dark:text-gray-200"
            >
              Confirm Password
            </label>
            <div className="mt-2.5">
              <input
                className="flex h-10 w-full text-gray-700 bg-white dark:bg-slate-600 rounded-md shadow-lg bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                type="password"
                {...register('confirmPassword', rules.confirmPassword)}
                placeholder="Confirm Password"
              />
              {errors.confirmPassword && (
                <span className="text-red-500">
                  {errors.confirmPassword.message}
                </span>
              )}
              <Link
                href="/"
                className="text-sm m-1 font-medium text-indigo-600 hover:text-indigo-700 hover:underline focus:text-indigo-700"
              >
                Forgot password?
              </Link>
            </div>
          </div>
        )}
        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className='block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2 dark:bg-indigo-500 dark:hover:bg-indigo-600 dark:focus:bg-indigo-600 dark:active:bg-indigo-600'
          >
            Sign in
          </button>
        </div>
      </div>
    </form>
  );
};

{/* <form className="bg-white">
			<h1 className="text-gray-800 font-bold text-2xl mb-1">Hello Again!</h1>
			<p className="text-sm font-normal text-gray-600 mb-7">Welcome Back</p>
			<div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
				<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
					fill="currentColor">
					<path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
						clip-rule="evenodd" />
				</svg>
				<input className="pl-2 outline-none border-none" type="text" name="" id="" placeholder="Full name" />
      </div>
				<div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
					<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none"
						viewBox="0 0 24 24" stroke="currentColor">
						<path strokeLinecap="round" stroke-linejoin="round" strokeWidth="2"
							d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
					</svg>
					<input className="pl-2 outline-none border-none" type="text" name="" id="" placeholder="Username" />
      </div>
					<div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
						<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none"
							viewBox="0 0 24 24" stroke="currentColor">
							<path strokeLinecap="round" stroke-linejoin="round" strokeWidth="2"
								d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
						</svg>
						<input className="pl-2 outline-none border-none" type="text" name="" id="" placeholder="Email Address" />
      </div>
						<div className="flex items-center border-2 py-2 px-3 rounded-2xl">
							<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
								fill="currentColor">
								<path fill-rule="evenodd"
									d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
									clip-rule="evenodd" />
							</svg>
							<input className="pl-2 outline-none border-none" type="text" name="" id="" placeholder="Password" />
      </div>
							<button type="submit" className="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2">Login</button>
							<span className="text-sm ml-2 hover:text-blue-500 cursor-pointer">Forgot Password ?</span>
		</form> */}