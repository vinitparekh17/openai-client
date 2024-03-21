import { toast } from 'react-hot-toast';
import { useFetch } from '../hooks';
import { AuthSlice } from '../slices/authSlice';
import { AnyAction, Dispatch } from '@reduxjs/toolkit';
import { NextRouter } from 'next/router';

export const authSubmit = async (
  data: AuthFormValues | any,
  dispatch: Dispatch<AnyAction>,
  router: NextRouter
): Promise<any> => {

      try {
        const { formType } = data as FormType;

        const { err, res } = await useFetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URI}/user/${formType}`,
          {
            method: 'POST',
            body: JSON.stringify(data),
          }
        );

        if (!err && res) {

          dispatch(AuthSlice.actions.updateProfile({
            id: res.data._id,
            name: res.data.name,
            email: res.data.email,
            profile: res.data.profile
          }));

          router.push('/conversations');

        } else {
          toast.error(res.message);
        }
        
      } catch (error: unknown) {
        error instanceof Error && console.error(error.message);
        toast.error('An error occurred while processing your request');
      }

};

export const authSignOut = async (dispatch: Dispatch<AnyAction>, router: NextRouter) => {
  const NEXT_PUBLIC_BACKEND_URI = process.env.NEXT_PUBLIC_BACKEND_URI
  try {
    const { err, res } = await useFetch(
      `${NEXT_PUBLIC_BACKEND_URI}/user/signout`,
      { method: 'GET' }
    );
    if (!err && res) {
      if (res.success) {
        router.push('/login');
        dispatch(AuthSlice.actions.SignOut());
      }
    }
  } catch (error: unknown) {
    error instanceof Error && console.error(error.message);
    toast.error('An error occurred while signing out');
  }
};

export const handleEditProfile = async (data: EditFormValues, dispatch: Dispatch<AnyAction>) => {
  try {
    const { err, res } = await useFetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URI}/user/update/${data.id}`,
      {
        method: 'POST',
        body: JSON.stringify(data),
      }
    );
    if (!err && res) {
      toast.success("Profile updated successfully");
      dispatch(AuthSlice.actions.updateProfile({
        id: res.data._id,
        name: res.data.name,
        email: res.data.email,
        profile: res.data.profile,
      }))
    } else {
      toast.error(res.message);
    }
  } catch (error: unknown) {
    error instanceof Error && console.error(error.message);
    toast.error('An error occurred while processing your request');
  }
}

export const handleForgotPassword = async (email: string) => {
  try {
    const { err, res } = await useFetch(`${process.env.NEXT_PUBLIC_BACKEND_URI}/user/forgotpassword`, {
      method: 'POST',
      body: JSON.stringify({ email }),
    });
    if (!err && res) {
      toast.success(res.data);
    } else {
      toast.error(res.message);
    }
  } catch (error) {
    error instanceof Error && console.error(error.message);
    toast.error('An error occurred while processing your request');
  }
}

export const handleResetPassword = async (router: NextRouter, password: string, token: string) => {
  try {
    const { err, res } = await useFetch(`${process.env.NEXT_PUBLIC_BACKEND_URI}/user/resetpassword/${token}`, {
      method: 'POST',
      body: JSON.stringify({ password }),
    });
    if (!err && res) {
      toast.success(res.data);
      router.push('/login');
    } else {
      toast.error(res.message);
    }
  } catch (error) {
    error instanceof Error && console.error(error.message);
    toast.error('An error occurred while processing your request');
  }
}