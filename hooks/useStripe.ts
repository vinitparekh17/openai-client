import {
  PaymentElement,
  useStripe,
  useElements
} from '@stripe/react-stripe-js';

export function useStrip() {
  const stripe = useStripe()!;
  const elements = useElements()!;
  return { PaymentElement, stripe, elements };
}
