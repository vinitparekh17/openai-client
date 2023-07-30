export default function ExportData() {
  const exportIntructions = [
    "Your account details and conversations will be included in the export.",
    "The data will be sent to your registered email in a downloadable file.",
    "The download link will expire 24 hours after you receive it.",
    "Processing may take some time. You'll be notified when it's ready."
  ]
  return (
    <>
      <div className="mt-2 space-y-2">
        <div className="flex items-center justify-between">
          <h2 className="text-xl my-2 font-semibold">Export Data</h2>
        </div>
        <hr className="my-6 h-px dark:bg-gray-700 bg-gray-200 w-[98%] mx-auto" />
        <div className="flex justify-around flex-col sm:flex-row">

          <div className="p-3 flex justify-center">
            <div
              className="w-fit mx-auto dark:bg-gray-600 rounded-xl m-4 bg-white"
              style={{
                clipPath: 'polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)'
              }}
            >
              <video
                className="dark:mix-blend-multiply z-20 rounded-lg"
                src="/videos/ll.webm"
                loop={true}
                autoPlay={true}
                muted={true}
              ></video>
            </div>
          </div>
          <div className="self-center">
            <div className="flex justify-start items-center">
              <ul className="flex flex-col justify-center">
                {exportIntructions.map((inc, i) => (<li key={i} className="flex justify-start items-center">
                  <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                  <p className="text-gray-500 dark:text-gray-400 mx-5 sm:text-2xl">
                    {inc}
                  </p>
                </li>))}
              </ul>
            </div>
            <div className="mt-5 flex justify-center items-center">
              <p className="text-gray-500 dark:text-gray-400 mx-5 sm:text-2xl">
                Are you sure you want to export your data?
              </p>
              <button
                className="px-4 py-2 text-sm font-medium tracking-wide
          text-white capitalize transition-colors duration-200 transform
           bg-gray-800 shadow-sm shadow-black rounded-md dark:bg-gray-800
            hover:bg-gray-700 dark:hover:bg-gray-700 focus:outline-none
             focus:bg-gray-700 dark:focus:bg-gray-700"
              >
                Export
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
