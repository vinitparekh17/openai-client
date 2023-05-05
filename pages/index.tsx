import type { NextPage } from 'next';
// lazy load navbar
import SkeletonNavbar from '../components/Skeleton/SkeletonNav';
import dynamic from 'next/dynamic';
const Navbar = dynamic(() => import('../components/Basic/Navbar'), { ssr: false, loading: () => <SkeletonNavbar /> });
import MyHead from '../components/Basic/Head';

const Home: NextPage = () => {
  return (
    <>
      <MyHead />
      <Navbar />
    </>
  )
}

export default Home