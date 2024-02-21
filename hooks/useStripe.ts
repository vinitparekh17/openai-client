import {
  Elements,
  PaymentElement,
  useStripe,
  useElements
} from '@stripe/react-stripe-js';
import { toast } from 'react-hot-toast';
import { NEXT_PUBLIC_BACKEND_URI } from "../config";

import { loadStripe } from '@stripe/stripe-js';
import { useFetch } from './useFetch';
import type { Dispatch, SetStateAction } from 'react';

export function useStrip() {
  const stripe = useStripe()!;
  const elements = useElements()!;
  const StripPromise = loadStripe("pk_test_51NOQGJSEG5Ae70mx2WtgBR63fsDuvbJBlLwrfjQq1CnZegDA6XR2751CTp3rrd4CUSsRsiyTimBDV4lAsdHXBxSG00ni0dOxHD  ", {
    locale: 'en'
  });

  let clientSecret = "";

  const createPaymentIntent = (setStripeModel: Dispatch<SetStateAction<boolean>>, setClientSecret: Dispatch<SetStateAction<string>>, amount: number) => {
    useFetch(`${NEXT_PUBLIC_BACKEND_URI}/payments/stripe/create`, {
      method: "POST",
      body: JSON.stringify({ amount })
    }).then(data => data.res?.json()).then(response => {
      setClientSecret(response.data);
      // console.log("UseStripe " + clientSecret + " Data: " + JSON.stringify(response));
      setStripeModel(true)

    }).catch((err) => {
      toast.error(err.message);
    });
  }

  const HandleStripPaymentSubmit = async (event: any) => {
    try {
      event.preventDefault();
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

  return { PaymentElement, stripe, StripPromise, Elements, clientSecret, elements, HandleStripPaymentSubmit, createPaymentIntent };
}
