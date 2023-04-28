import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "../slices/authSlice";

export function makeStore() {
  return configureStore({
    reducer: {
        auth: AuthReducer,
    },
  });
}

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

export const store = <AppStore>makeStore();