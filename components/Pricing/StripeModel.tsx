import { Modal } from '@nextui-org/react';
import { useStripe, useElements } from '@stripe/react-stripe-js';
import { FaStripe } from 'react-icons/fa';
import { HandleStripPaymentSubmit } from '../../utils/payment';
import { CurrentStripeState, StripeSlice } from '../../slices/paymentSlice';
import { currentTheme } from '../../slices/themeSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function StripeModel({ stripeModel, setStripeModel }: StripeModel) {
    const { theme } = useSelector(currentTheme);
    const dispatch = useDispatch();
    const stripee = useStripe();
    if (stripee) {
        dispatch(StripeSlice.actions.loadStripeConfig({
            stripe: stripee,
            elements: useElements()
        }));
    }
    const { PaymentElement, Elements, stripPromise, clientSecret, stripe } = useSelector(CurrentStripeState);
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
                <Elements stripe={stripPromise} options={{ clientSecret, appearance: { theme: theme === 'dark' ? 'night' : 'stripe' } }}>
                    <form onSubmit={HandleStripPaymentSubmit}>
                        <PaymentElement />
                        <button
                            className="flex items-center w-full p-2 mt-4 mb-2 text-white rounded-lg focus:outline-none bg-gradient-to-r from-indigo-500 via-indigo-600 to-indigo-800 hover:from-indigo-700 hover:to-indigo-900"
                            disabled={!stripe}
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
                </Elements>
            </Modal.Body>
        </Modal>
    );
}