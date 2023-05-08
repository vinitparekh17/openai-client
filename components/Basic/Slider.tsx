import { useState } from 'react';
import { Modal } from '@nextui-org/react';
import { BiPlus } from 'react-icons/bi';
import { ReactElement } from 'react';
import BotCard from '../Bot/BotCard'

export default function Slider({ children }: { children: ReactElement }) {
    const [open, setOpen] = useState<boolean>(false)
    return (
        <div className='flex'>
            <div className="flex flex-col-reverse overflow-y-scroll items-center w-24 mt-16 h-[calc(100vh-4rem)] scrollbar-custom bg-teal-200 dark:bg-teal-900 dark:text-teal-300">
                {/* create / add button */}
                <div className="fixed h-14 bottom-0 w-12">
                    <button
                        onClick={() => setOpen(true)}
                        className="p-2 h-12 my-1 rounded-full text-teal-600  hover:text-white text-[2rem] flex justify-center items-center shadow-md bg-teal-100 dark:bg-teal-800 dark:text-teal-300 dark:hover:bg-teal-500 dark:hover:text-white">
                        <BiPlus />
                    </button>
                    <Modal
                        closeButton
                        blur
                        area-aria-labelledby="create-bot"
                        open={open}
                        onClose={() => setOpen(false)}>
                        <Modal.Header>Create Bot</Modal.Header>
                        <Modal.Body>
                            <p>Bot Name</p>
                            <input type="text" className="w-full border-2 border-gray-200 dark:border-gray-700 rounded-md p-2" />
                        </Modal.Body>
                        <Modal.Footer>
                            <button className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-md">Create</button>
                        </Modal.Footer>
                    </Modal>
                </div>
                <div className="h-14"></div>
                <BotCard />
                <BotCard />
            </div>
            <div className="mt-16 overflow-y-hidden w-full bg-gray-100 dark:bg-gray-700">
                {children}
            </div>
        </div>
    )
}