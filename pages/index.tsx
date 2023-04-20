import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div className="bg-white">
      <div className="flex items-center max-h-[100vh] h-screen">
        <div className="px-8 w-1/2">
          <div className="text-7xl text-gray-900 font-semibold">
            <h1>Building digital</h1>
            <h1>products, brands</h1>
            <h1 className="text-violet-600">experience</h1>
          </div>
          <div className="mt-4">
            <p className="text-gray-700">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad similique
              nam fugit veritatis quos expedita quidem maxime at quas voluptatum,
              architecto maiores excepturi. Quos quia, magnam accusamus quasi
              impedit necessitatibus.
            </p>
          </div>
          <div className="mt-4 flex items-center space-x-4">
            <input
              type="text"
              className="bg-white rounded h-full py-2.5 w-3/5 border border-gray-400/50 px-2"
              placeholder="Enter you email" />
            <button
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white">
              Submit
            </button>
          </div>
        </div>
        <div className="w-1/2 h-full overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=987&amp;q=80"
            alt="image"
            className="h-fit w-3/4 object-contain" />
        </div>
      </div>
    </div>
  )
}

export default Home
