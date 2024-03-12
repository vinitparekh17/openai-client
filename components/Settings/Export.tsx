import React from 'react';
import { FaDownload } from 'react-icons/fa';

const ExportDataPage = () => {
  return (
    <div className="min-h-full flex items-center justify-center px-4 py-12">
      <div className="max-w-4xl w-full bg-white dark:bg-gray-800
       rounded-lg shadow-lg p-8">
        <div className="text-center mb-10">
          <div className="flex justify-center items-center mb-4">
            <FaDownload className="text-indigo-500 text-5xl mr-4" />
            <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-400">Export Your Data</h1>
          </div>
          <p className="text-gray-600 dark:text-gray-500 text-lg">
            Here's what you need to know about exporting your data.
          </p>
        </div>
        <div className="text-gray-700 dark:text-gray-500 mb-8">
          <p className="mb-4">
            Your account details and conversations will be included in the export. The data will be sent to your registered email in a downloadable file.
          </p>
          <p className="mb-4">
            The download link will expire 24 hours after you receive it. Processing may take some time. You'll be notified when it's ready.
          </p>
        </div>
        <div className="flex items-center justify-center mb-8">
          <button
            className="bg-indigo-500 dark:bg-indigo-700 hover:dark:bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline transition duration-300 flex items-center"
            type="button"
          >
            <FaDownload className="mr-2" />
            Export
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExportDataPage;