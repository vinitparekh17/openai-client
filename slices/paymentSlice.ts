import type { PropsWithChildren } from "react";
import type { Stripe, StripeElements } from "@stripe/stripe-js";
import type { PaymentElementComponent, ElementProps } from "@stripe/react-stripe-js";
import { Elements, PaymentElement } from "@stripe/react-stripe-js";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { loadStripe } from "@stripe/stripe-js";
import { NEXT_PUBLIC_STRIPE_ID } from "../config";
import { FunctionComponent } from "react";

type StripeState = {
    stripe: Stripe | null,
    elements: StripeElements | null,
    clientSecret: string | null,
    stripPromise: Promise<Stripe | null>,
    Elements: FunctionComponent<PropsWithChildren<any>>
    PaymentElement: PaymentElementComponent
}

type StripeConfig = {
    stripe: Stripe | null,
    elements: StripeElements | null,
}

const initialState: StripeState = {
    stripe: null,
    elements: null,
    clientSecret: null,
    Elements: Elements,
    PaymentElement,
    stripPromise: loadStripe(NEXT_PUBLIC_STRIPE_ID ? NEXT_PUBLIC_STRIPE_ID : "")
}

export const StripeSlice = createSlice({
    name: 'stripe',
    initialState,
    reducers: {
        setStripeSecret(state: StripeState, action: PayloadAction<string>) {
            state.clientSecret = action.payload;
        },
        loadStripeConfig(state: StripeState, action: PayloadAction<StripeConfig>) {
            state.stripe = action.payload.stripe;
            state.elements = action.payload.elements;
        }
    }
})

export const CurrentStripeState = (state: StripeState) => state;

export default StripeSlice.reducer;