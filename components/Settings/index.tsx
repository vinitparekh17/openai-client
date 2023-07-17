import { useRouter } from 'next/router';
import { Managebot } from './Managebot';
import Pricing from './Pricing';
import { useEffect, useState } from 'react';
import Profile from './Profile';
import ExportData from './Export';
export default function Seetings() {
  const router = useRouter();
  let [menu, setMenu] = useState('');
  useEffect(() => {
    setMenu(router.query.menu as string);
    return () => {
      setMenu('');
    };
  }, [router.query]);
  if (menu !== '') {
    switch (menu) {
      case 'profile':
        return <Profile />;
      case 'manage bots':
        return <Managebot />;
      case 'billing':
        return <Pricing />;
      case 'export data':
        return <ExportData />;
      default:
        return <></>;
    }
  }
  return <></>;
}
