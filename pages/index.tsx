import type { NextPage } from 'next';
// lazy load navbar
import Protected from '../components/Basic/Protected';

const Home: NextPage = () => {
  return (
    <>
    <Protected>
      <div className='flex flex-col justify-center items-center'>
      <h1>Home</h1>
      <img src="/images/robot.gif" alt="nextjs" className="h-96" />
      </div>
    </Protected>
    </>
  )
}

export default Home