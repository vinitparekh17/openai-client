import { useSession } from 'next-auth/react';
import { ReactElement, Suspense, use, useEffect, useState } from 'react';
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
      if(!user.id) {
        fetch(`${process.env.NEXT_PUBLIC_BACKEND_URI}/user/profile`, {
          method: 'GET',
          credentials: 'include',
        })
          .then((res) => res.json())
          .then(({ data }) => {
              dispatch(AuthSlice.actions.updateProfile({
                id: data._id,
                email: data.email,
                name: data.name,
                profile: data.profile
              }));
          })
          .catch((err) => {
            console.error(err);
          });
      }
    }, [user.id, dispatch])
  

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
