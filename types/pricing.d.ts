import { Dispatch, SetStateAction } from "react";

interface PricingItem {
  id: number;
  plan: string;
  description: string;
  duration: string;
  price: number;
  features: string[];
}

interface PricingModelProps {
  visible: boolean,
  setVisible: Dispatch<SetStateAction<boolean>>,
  item: PricingItem,
  razorPayment: any
}