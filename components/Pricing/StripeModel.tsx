import { Modal } from '@nextui-org/react';
import { HandleStripPaymentSubmit } from '../../utils/payment';
import { useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js';
import { FaStripe } from 'react-icons/fa';

export default function StripeModel({ stripeModel, setStripeModel, clientSecret }: StripeModel) {
    
    const stripe = useStripe();
    const elements = useElements();

    if (!clientSecret) return null;
    return (
        <Modal
            closeButton
            open={stripeModel}
            preventClose
            animated
            onClose={() => setStripeModel(false)}
            aria-labelledby="modal-title">
            <Modal.Header className='text-lg'>
                Complete your purchase
            </Modal.Header>
            <Modal.Body>
                
                    <form onSubmit={event => HandleStripPaymentSubmit(event, stripe, elements, clientSecret, setStripeModel)}>
                        <PaymentElement />
                        <button
                            className="disabled:cursor-not-allowed flex items-center w-full p-2 mt-4 mb-2 text-white rounded-lg focus:outline-none bg-gradient-to-r from-indigo-500 via-indigo-600 to-indigo-800 hover:from-indigo-700 hover:to-indigo-900"
                            disabled={!stripe || !elements}
                            type='submit'
                        >
                            <span className="mr-2">
                                <FaStripe size={30} />
                            </span>
                            <span className="ml-3 text-md font-semibold">
                                Pay with Credit / Debit Card
                            </span>
                        </button>
                    </form>
            </Modal.Body>
        </Modal>
    );
}