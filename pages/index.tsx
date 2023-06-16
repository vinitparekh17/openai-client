import type { NextPage } from 'next';
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