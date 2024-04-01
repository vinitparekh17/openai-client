import { useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import PricingModel from '../Pricing/Model';
import StripeModel from '../Pricing/StripeModel';
import { useRazor } from '../../hooks';
import PricingData from '../../data/price.json';
import { toast } from 'react-hot-toast';
import { Stripe, StripeElementsOptions, loadStripe } from '@stripe/stripe-js';
import { currentTheme } from '../../slices/themeSlice';
import { useSelector } from 'react-redux';

export default function Pricing() {
  const stripPromise: Promise<Stripe | null> = loadStripe(process.env.NEXT_PUBLIC_STRIPE_ID!);

  const { theme } = useSelector(currentTheme);

  const [clientSecret, setClientSecret] = useState('');
  const [item, setItem] = useState({} as PricingItem);
  const [stripeModel, setStripeModel] = useState(false);
  const [visible, setVisible] = useState(false);
  const { status } = useRazor();
  status
    .then((bool) => (!bool ? toast.error('Something went wrong') : null))
    .catch((err) => toast.error(err.message));

  const handleModel = (i: PricingItem) => {
    setVisible(true);
    setItem(i);
  };

  const option: StripeElementsOptions = {
    clientSecret,
    appearance: {
      theme: theme === 'dark' ? 'night' : 'stripe',
    },
  };

  return (
    <section className="dark:bg-gray-900 rounded-xl">
      <PricingModel
        item={item}
        setStripeModel={setStripeModel}
        setVisible={setVisible}
        visible={visible}
        setClientSecret={setClientSecret}
      />
      {clientSecret && (
        <Elements stripe={stripPromise} options={option}>
          <StripeModel
            setStripeModel={setStripeModel}
            stripeModel={stripeModel}
            clientSecret={clientSecret}
            item={item}
          />
        </Elements>
      )}
      <div className="py-3 px-2 mx-auto max-w-screen-xl lg:py-2 lg:px-2">
        <div className="mx-auto max-w-screen-md text-center mb-6 lg:mb-12">
          <h2 className="mb-2 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Pricing
          </h2>
        </div>
        <div className="space-y-5 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-5 lg:space-y-0">
          {PricingData.map((item: PricingItem, i: number) => (
            <div
              key={i + 1}
              className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-gray-100 rounded-lg border border-gray-100 shadow-sm shadow-gray-700 dark:shadow-gray-400 dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white"
            >
              <h3 className="mb-4 text-2xl font-semibold">{item.plan}</h3>
              <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                {item.description}
              </p>
              <div className="flex justify-center items-baseline my-8">
                {/* INR symbol */}
                <span className="mr-2 text-5xl font-extrabold">
                  ₹{item.price}
                </span>
                <span className="text-gray-500 dark:text-gray-400">
                  {item.duration}
                </span>
              </div>
              <ul role="list" className="mb-8 space-y-4 text-left">
                {item.features.map((feature, index) => (
                  <li key={index * 2} className="flex items-center space-x-3">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                // onClick={() => razorPayment(i)}
                onClick={() => handleModel(item)}
                className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-blue-900"
              >
                Get started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
