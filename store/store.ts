import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "../slices/authSlice";
import ThemeReducer from "../slices/themeSlice";

function makeStore() {
  return configureStore({
    reducer: {
        auth: AuthReducer,
        theme: ThemeReducer,
    },
  });
}

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

export const store = <AppStore>makeStore();