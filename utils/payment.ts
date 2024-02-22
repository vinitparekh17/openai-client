import type { SetStateAction, Dispatch, FormEvent } from 'react';
import { useFetch } from '../hooks';
import { toast } from 'react-hot-toast';
import { NEXT_PUBLIC_RAZORPAY_KEY_ID,  NEXT_PUBLIC_BACKEND_URI} from '../config';
import { useDispatch, useSelector } from 'react-redux';
import { CurrentStripeState, StripeSlice } from '../slices/paymentSlice';

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

export const createPaymentIntent = (setStripeModel: Dispatch<SetStateAction<boolean>>, amount: number) => {

  const dispatch = useDispatch();

  useFetch(`${NEXT_PUBLIC_BACKEND_URI}/payments/stripe/create`, {
    method: "POST",
    body: JSON.stringify({ amount })
  }).then(data => data.res?.json()).then(response => {
    dispatch(StripeSlice.actions.setStripeSecret(response.data))
    console.log(" Data: " + JSON.stringify(response));
    setStripeModel(true)

  }).catch((err) => {
    toast.error(err.message);
  });
}


export const HandleStripPaymentSubmit = async (event: FormEvent<HTMLFormElement>) => {
  try {
    event.preventDefault();
    const { stripe, elements, clientSecret } = useSelector(CurrentStripeState)
    if (!stripe || !elements) {
      return;
    }

    const { error } = await stripe.confirmPayment({
      clientSecret,
      elements,
      confirmParams: {
        return_url: 'http://localhost:3000/settings/billing'
      }
    });

    if (error) {
      console.error(error)
      error.message && toast.error(error.message);
    } else {
      toast.success("Payment successfull!")
    }

  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(error);
      toast.error(error.message);
    }
  }
};