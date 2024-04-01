type PricingItem = {
  id: number;
  plan: string;
  description: string;
  duration: string;
  price: number;
  features: string[];
};

type PricingModelProps = {
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
  item: PricingItem;
  setStripeModel: Dispatch<SetStateAction<boolean>>;
  setClientSecret: Dispatch<SetStateAction<string>>;
};

type StripeModel = {
  stripeModel: boolean;
  setStripeModel: Dispatch<SetStateAction<boolean>>;
  clientSecret: string;
  item: PricingItem;
};
