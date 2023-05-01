import type { NextPage } from 'next';
import Navbar from '../components/Navbar';
import MyHead from '../components/Head';

const Home: NextPage = () => {
  return (
    <>
      <MyHead />
      <Navbar />
      <div className="bg-gray-100 dark:bg-gray-900">
      </div>
    </>
  )
}

export default Home