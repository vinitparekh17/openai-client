import { useSession } from 'next-auth/react';
import { ReactElement, Suspense, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AuthSlice, CurrentAuthState } from '../../slices/authSlice';
import AccessDenied from './AccessDenied';
import MyHead from './Head';
import Loadeing from './Loading';
import Sidebar from './Sidebar';
import { useFetch } from '../../hooks';
import toast from 'react-hot-toast';

export default function Protected({ children }: { children: ReactElement }) {
  const { user } = useSelector(CurrentAuthState);
  const { data: session } = useSession();
  const [open, setOpen] = useState<boolean>(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!user.id) {
      useFetch(`${process.env.NEXT_PUBLIC_BACKEND_URI}/user/profile`, {
        method: 'GET',
      }).then(({ err, res }) => {
        if (!err && res) {
          dispatch(AuthSlice.actions.updateProfile({
            id: res.data._id,
            name: res.data.name,
            email: res.data.email,
            profile: res.data.profile,
          }));
        } else if( err && err.message == 'Unauthorized') {
          dispatch(AuthSlice.actions.SignOut());
        }
      }).catch((error) => {
        if(error.message !== 'Unauthorized') {
          toast.error('An error occurred while processing your request');
        }
      });
    }

  }, [dispatch, user.id]);

  if (session || user.id) {
    return (
      <Suspense fallback={<Loadeing />}>
        <MyHead />
        <Sidebar setOpen={setOpen} open={open}>
          {children}
        </Sidebar>
      </Suspense>
    );
  } else {
    return <AccessDenied />;
  }
}
