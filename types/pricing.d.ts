type PricingItem = {
  id: number;
  plan: string;
  description: string;
  duration: string;
  price: number;
  features: string[];
}

type PricingModelProps = {
  visible: boolean,
  setVisible: Dispatch<SetStateAction<boolean>>,
  item: PricingItem,
  setStripeModel: Dispatch<SetStateAction<boolean>>
}

type StripeModel = {
  stripeModel: boolean,
  setStripeModel: Dispatch<SetStateAction<boolean>>
}