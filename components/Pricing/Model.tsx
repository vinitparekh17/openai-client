import { Modal, Text } from '@nextui-org/react';
import { SiRazorpay } from 'react-icons/si';
import { FaStripe } from 'react-icons/fa';
import { PricingModelProps } from '../../types/pricing';

export default function PricingModel({ visible, setVisible, item, razorPayment }: PricingModelProps) {
    return (
        <Modal
            closeButton
            preventClose
            aria-labelledby="modal-title"
            open={visible}
            onClose={() => setVisible(false)}
        >
            <Modal.Header>
                <Text id="modal-title" size={18}>
                    Choose
                    <Text b className="ml-1" size={18}>
                        Payment Method
                    </Text>
                </Text>
            </Modal.Header>
            <Modal.Body>
                {/* <form onSubmit={e => stripePayment(e, stripe, elements)}> */}
                {/* <PaymentElement /> */}
                <button className="flex items-center w-full p-2 mb-2 text-white rounded-lg focus:outline-none bg-gradient-to-r from-indigo-500 via-indigo-600 to-indigo-800 hover:from-indigo-700 hover:to-indigo-900"
                //   onClick={() => stripe.createPaymentMethod({
                //     type: 'card',
                //     billing_details: {
                //       name: 'Jenny Rosen',
                //       email: ''
                //     },
                //     card: elements.getElement(PaymentElement) as StripeCardElement,
                //   })}
                >
                    <span className="mr-2">
                        <FaStripe size={30} />
                    </span>
                    <span className="ml-3 text-md font-semibold">
                        {item.price ? `Pay ₹${item.price} with Credit / Debit Card` : 'Card Payments'}
                    </span>
                </button>
                <button
                    className="flex items-center w-full
                    p-2 mb-2 text-white rounded-lg
                    focus:outline-none bg-gradient-to-r
                    from-blue-500 via-blue-600 
                    to-blue-800 hover:from-blue-700 
                    hover:to-blue-900"
                    onClick={() => razorPayment(item.id)}>
                    <span className="mr-2 text-2xl">
                        <SiRazorpay size={30} />
                    </span>
                    <span className="ml-3 text-md font-semibold">
                        {item.price ? `Pay ₹${item.price} with UPI` : 'UPI Payments'}
                    </span>
                </button>
            </Modal.Body>
        </Modal>
    );
}