import { useFetch } from '../hooks/useFetch';
import { NEXT_PUBLIC_BACKEND_URI } from '../config';

export const authSubmit = async (data: FormValues): Promise<any> => {
  try {
    const { formType } = data;
    const { err, res } = await useFetch(
      `${NEXT_PUBLIC_BACKEND_URI}/api/user/${formType}`,
      {
        method: 'POST',
        body: JSON.stringify(data),
      }
    );
    if (!err && res) {
      const { token } = await res.json();
      localStorage.setItem('token', token);
      if (localStorage.getItem('token')) {
        window.location.href = '/conversations';
      }
    }
    console.log(err);
  } catch (error) {
    console.log(error);
  }
};

export const authSignOut = async () => {
  try {
    fetch(`${NEXT_PUBLIC_BACKEND_URI}/api/user/signout`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      credentials: 'include',
    })
      .then(res => res.json())
      .then((data) => {
        console.log(data);
        // if (data.message) {
        //   localStorage.removeItem('token');
        //   window.location.href = '/login';
        // }
      });
    // const {err, res} = await useFetch(`${NEXT_PUBLIC_BACKEND_URI}/api/user/signout`, { method: 'GET' });
    // if(!err && res) {
    //   console.log(res.json());
    // } 
  } catch (error) {
    console.log(error);
  }
};

export const googleAuth = (accessToken: string): void => {
  try {
    fetch(`${NEXT_PUBLIC_BACKEND_URI}/api/user/google`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({ accessToken }),
    });
  } catch (error) {}
};
