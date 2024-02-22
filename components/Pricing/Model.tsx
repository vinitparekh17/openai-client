import { SiRazorpay } from 'react-icons/si';
import { FaStripe } from 'react-icons/fa';
import { CgClose } from 'react-icons/cg';
import { razorPayment } from '../../utils/payment';
import { createPaymentIntent } from '../../utils/payment';
import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react'

export default function PricingModel({ visible, setVisible, item, setStripeModel }: PricingModelProps) {

    return (
        <Transition.Root show={visible} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={setVisible}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-black/40 opacity-100 text-left shadow-xl transition-all sm:my-8 sm:w-fit sm:max-w-lg">
                                <div className="dark:bg-gray-800 px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                    <div className="sm:flex sm:items-start">
                                        <div className="mt-3 text-center sm:mt-0">
                                            <span className='float-right cursor-pointer p-1 text-white' onClick={() => setVisible(false)}><CgClose /></span>
                                            <Dialog.Title as="h3" className="text-base text-center font-semibold leading-6 text-gray-300">
                                                Payment Method
                                            </Dialog.Title>
                                            <button
                                                className="flex items-center w-full p-2 mt-4 mb-2 text-white rounded-lg focus:outline-none bg-gradient-to-r from-indigo-500 via-indigo-600 to-indigo-800 hover:from-indigo-700 hover:to-indigo-900"
                                                onClick={() => createPaymentIntent(setStripeModel, item.price)}>
                                                <span className="mr-2">
                                                    <FaStripe size={30} />
                                                </span>
                                                <span className="ml-3 text-md font-semibold">
                                                    Pay with Credit / Debit Card
                                                </span>
                                            </button>

                                            <button
                                                className="flex items-center w-full
                                                p-2 mb-2 text-white rounded-lg focus:outline-none bg-gradient-to-r from-blue-500 via-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900"
                                                onClick={() => razorPayment(item.id)}>
                                                <span className="mr-2 text-2xl">
                                                    <SiRazorpay size={30} />
                                                </span>
                                                <span className="ml-3 text-md font-semibold">
                                                    Pay with UPI
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}
