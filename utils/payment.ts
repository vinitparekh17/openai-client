import type { SetStateAction, Dispatch, FormEvent } from 'react';
import { useFetch } from '../hooks';
import { toast } from 'react-hot-toast';
import { NEXT_PUBLIC_RAZORPAY_KEY_ID, NEXT_PUBLIC_BACKEND_URI } from '../config';
import { Stripe, StripeElements } from '@stripe/stripe-js';

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

export const createPaymentIntent = (setStripeModel: Dispatch<SetStateAction<boolean>>, setModel: Dispatch<SetStateAction<boolean>>, amount: number, setClientSecret: Dispatch<SetStateAction<string>>) => {
  useFetch(`${NEXT_PUBLIC_BACKEND_URI}/payments/stripe/create`, {
    method: "POST",
    body: JSON.stringify({ amount })
  }).then(data => data.res?.json()).then(response => {
    setClientSecret(response.data)
    setModel(false)
    setStripeModel(true)
  }).catch((err) => {
    toast.error(err.message);
  });
}


export const HandleStripPaymentSubmit = async (event: FormEvent<HTMLFormElement>, stripe: Stripe | null, elements: StripeElements | null, clientSecret: string, setStripeModel: Dispatch<SetStateAction<boolean>>) => {
  try {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const { error: submitError } = await elements.submit()
    if (submitError) {
      toast.error(submitError.message!)
      return;
    }
    const { error } = await stripe.confirmPayment({
      elements,
      clientSecret,
      redirect: 'if_required'
    })

    if (error) {
      setStripeModel(false)
      error.message && toast.error(error.message);
    } else {
      setStripeModel(false)
      toast.success("Payment successfull!", { duration: 5000 })
    }

  } catch (error: unknown) {
    if (error instanceof Error) {
      toast.error(error.message);
    }
  }

};