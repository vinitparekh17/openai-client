import React, { useRef, useState } from 'react';
import { FaDownload } from 'react-icons/fa';
import { getConversation } from '../../utils/chat';
import { useSelector } from 'react-redux';
import { CurrentAuthState } from '../../slices/authSlice';
import { GenerateTransript } from '../../lib/handlebar';
import { htmlToPDF } from '../../lib/jspdf';
import toast from 'react-hot-toast';

const ExportDataPage = () => {
  const pdfElement = useRef<HTMLDivElement>()

  const { user } = useSelector(CurrentAuthState) as { user: UserData }
  

  const handleExport = () => {

    
    getConversation(user.id)
    .then(({ data }: { data: OldMessage[] }) => {
      if(!pdfElement.current) return;

      pdfElement.current.innerHTML = GenerateTransript({
        user,
        messages: data
      })
      
      htmlToPDF(pdfElement.current as HTMLDivElement)

    })
      .catch(err => {
        console.error(err)
        toast.error("Unable to generate transcript...")
      })
  }

  return (
    <div className="min-h-full flex items-center justify-center px-4 py-12">
      <div
        className="max-w-4xl w-full bg-white dark:bg-gray-800
       rounded-lg shadow-lg p-8"
      >
        <div className="text-center mb-10">
          <div className="flex justify-center items-center mb-4">
            <FaDownload className="text-indigo-500 text-5xl mr-4" />
            <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-400">
              Export Your Data
            </h1>
          </div>
          <p className="text-gray-600 dark:text-gray-500 text-lg">
            Here&apos;s what you need to know about exporting your data.
          </p>
        </div>
        <div className="text-gray-700 dark:text-gray-500 mb-8">
          <p className="mb-4">
            Your account details and conversations will be included in the
            export. The data will be sent to your registered email in a
            downloadable file.
          </p>
          <p className="mb-4">
            The download link will expire 24 hours after you receive it.
            Processing may take some time. You&apos;ll be notified when
            it&apos;s ready.
          </p>
        </div>
        <div className="flex items-center justify-center mb-8">
          <button
            className="bg-indigo-500 dark:bg-indigo-700 hover:dark:bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline transition duration-300 flex items-center"
            type="button"
            onClick={handleExport}
          >
            <FaDownload className="mr-2" />
            Export
          </button>
          <div className='hidden'>
          <div className='w-screen h-screen' ref={pdfElement as React.RefObject<HTMLDivElement>}> </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExportDataPage;
