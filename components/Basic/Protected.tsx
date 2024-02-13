import { useSession } from 'next-auth/react';
import { ReactElement, Suspense, useState } from 'react';
import { useSelector } from 'react-redux';
import { CurrentAuthState } from '../../slices/authSlice';
import AccessDenied from './AccessDenied';
import MyHead from './Head';
import Loadeing from './Loading';
import Sidebar from './Sidebar';

export default function Protected({ children }: { children: ReactElement }) {
  const { token } = useSelector(CurrentAuthState);
  const { data: session } = useSession();
  const [open, setOpen] = useState<boolean>(false);
  if (session || token) {
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
