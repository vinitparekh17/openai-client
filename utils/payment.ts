import type { SetStateAction, Dispatch, FormEvent } from 'react';
import { useFetch } from '../hooks';
import { toast } from 'react-hot-toast';
import { Stripe, StripeElements } from '@stripe/stripe-js';

declare global {
  interface Window {
    Razorpay: any;
  }
}

export const razorPayment = async (amount: number, user: UserData) => {
  const { err, res } = await useFetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URI}/payments/razorpay`,
    {
      method: 'POST',
      body: JSON.stringify({ amount }),
    }
  );
  if (!err && res) {
    const { data } = res;
    new window.Razorpay({
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      name: 'Omnisive',
      description: 'Enjoy the service with Omnisive',
      order_id: data.id,
      currency: data.currency,
      amount: data.amount,
      prefill: {
        name: user.name,
        email: user.email,
      },
      handler: function () {
        sendPaymentEmail(user, amount);
      },
    }).open(data);
  } else {
    toast.error(res.message)
  }
};

export const sendPaymentEmail = (user: UserData, amount: number) => {
  useFetch(`${process.env.NEXT_PUBLIC_BACKEND_URI}/payments/razorpay/email`, {
    method: 'POST',
    body: JSON.stringify({ user, amount }),
  })
}

export const createPaymentIntent = (
  setStripeModel: Dispatch<SetStateAction<boolean>>,
  setModel: Dispatch<SetStateAction<boolean>>,
  amount: number,
  setClientSecret: Dispatch<SetStateAction<string>>
) => {

  useFetch(`${process.env.NEXT_PUBLIC_BACKEND_URI}/payments/stripe/create`, {
    method: 'POST',
    body: JSON.stringify({ amount }),
  })
    .then((response) => {
      if (response.err) {
        toast.error(response.res.message)
      } else {
        setClientSecret(response.res.data);
      }
      setModel(false);
      setStripeModel(true);
    })
    .catch((err) => {
      toast.error(err.message);
    });
};

export const HandleStripPaymentSubmit = async (
  event: FormEvent<HTMLFormElement>,
  stripe: Stripe | null,
  elements: StripeElements | null,
  clientSecret: string,
  setStripeModel: Dispatch<SetStateAction<boolean>>,
  user: UserData,
  amount: number
) => {
  try {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const { error: submitError } = await elements.submit();
    if (submitError) {
      toast.error(submitError.message!);
      return;
    }
    const { error } = await stripe.confirmPayment({
      elements,
      clientSecret,
      redirect: 'if_required',
    });

    if (error) {
      setStripeModel(false);
      error.message && toast.error(error.message);
    } else {
      setStripeModel(false);
      sendPaymentEmail(user, amount)
      toast.success('Payment successfull!', { duration: 5000 });
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      toast.error(error.message);
    }
  }
};
