import type { NextPage } from 'next';
// lazy load navbar
import SkeletonNavbar from '../components/Skeleton/SkeletonNav';
import dynamic from 'next/dynamic';
const Navbar = dynamic(() => import('../components/Basic/Navbar'), { ssr: false, loading: () => <SkeletonNavbar /> });
import MyHead from '../components/Basic/Head';
import Protected from '../components/Basic/Protected';

const Home: NextPage = () => {
  return (
    <>
    <Protected>
      <div className='flex flex-col justify-center items-center'>
      <h1>Home</h1>
      </div>
    </Protected>
    </>
  )
}

export default Home