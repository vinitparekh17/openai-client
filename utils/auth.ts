import { useFetch } from '../hooks';
import { NEXT_PUBLIC_BACKEND_URI } from '../config';

export const authSubmit = async (
  method: AuthMethod,
  data: FormValues | any
): Promise<any> => {
  switch (method) {
    case 'normal':
      try {
        const { formType } = data as FormType;
        const { err, res } = await useFetch(
          `${NEXT_PUBLIC_BACKEND_URI}/user/${formType}?type=${method}`,
          {
            method: "POST",
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
      } catch (error) {
        console.log(error);
      }
      break;
      case 'google':
        try {
        const { formType } = data as  FormType;
          const { err, res } = await useFetch(
            `${NEXT_PUBLIC_BACKEND_URI}/api/user/${formType}?type=${method}`, {
              method: "POST",
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
        } catch (error) {
          console.log(error);
        }
      default:
        console.log('Invalid method');
      break;
        
  }
};

export const authSignOut = async () => {
  try {
    const { err, res } = await useFetch(
      `${NEXT_PUBLIC_BACKEND_URI}/user/signout`, { method: 'GET' });
    if (!err && res) {
      let { success } = await res.json();
      if (success) {
        localStorage.removeItem('token');
        window.location.href = '/login';
      }
    }
  } catch (error) {
    console.log(error);
  }
};
