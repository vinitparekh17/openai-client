import { useSession } from 'next-auth/react';
import { ReactElement, Suspense, useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AuthSlice, CurrentAuthState } from '../../slices/authSlice';
import AccessDenied from './AccessDenied';
import MyHead from './Head';
import Loadeing from './Loading';
import Sidebar from './Sidebar';

export default function Protected({ children }: { children: ReactElement }) {
  const { user } = useSelector(CurrentAuthState);
  const { data: session } = useSession();

  const [open, setOpen] = useState<boolean>(false);

  const dispatch = useDispatch();

  const fetchProfile = useCallback(() => {
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_URI}/user/profile`, {
      method: 'GET',
      credentials: 'include',
    })
      .then((res) => {
        if (res.status === 401) {
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
    return <Suspense fallback={<Loadeing />}>
      <AccessDenied />;
    </Suspense>
  }
}
