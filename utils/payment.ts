import type { FormEvent, SetStateAction, Dispatch } from 'react';
import { useFetch } from '../hooks';
import { NEXT_PUBLIC_RAZORPAY_KEY_ID,  NEXT_PUBLIC_BACKEND_URI} from '../config';

declare global {
  interface Window {
    Razorpay: any;
  }
}

export const razorPayment = async (data: number) => {
  const { err, res } = await useFetch(
    `${NEXT_PUBLIC_BACKEND_URI}/payments/razorpay`,
    {
      method: 'POST',
      body: JSON.stringify({ plan: data }),
    }
  );
  if (!err && res) {
    const { data } = await res.json();
    new window.Razorpay({
      key: NEXT_PUBLIC_RAZORPAY_KEY_ID,
      order_id: data.id,
      currency: data.currency,
      amount: data.amount,
      description: 'Thanks for your purchase',
      handler: function (response: any) {
        console.log(response);
      },
    }).open(data);
  }
};

export const stripePayment = async (event: FormEvent, stripe: any, elements: unknown) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();
    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    const result = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: "https://example.com/order/123/complete",
      },
    });

    if (result.error) {
      // Show error to your customer (for example, payment details incomplete)
      console.log(result.error.message);
    } else {
      // Your customer will be redirected to your `return_url`. For some payment
      // methods like iDEAL, your customer will be redirected to an intermediate
      // site first to authorize the payment, then redirected to the `return_url`.
    }
  };

  export const getStripeSecret = async (data: any, setVisible: Dispatch<SetStateAction<boolean>>) => {
    const { err, res } = await useFetch(`${NEXT_PUBLIC_BACKEND_URI}/api/payments/stripe`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        Authentication: `Bearer ${localStorage.getItem("token")}`,
      }
    })
    if(!err && res) {
      const myd = res.json();
      console.log(myd);
    }
  }