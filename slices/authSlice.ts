import jwtDecode from "jwt-decode";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthState, Payload, DecodedToken } from "../types/auth";
import { BACKEND_URI } from ".././config";

const initialState: AuthState = {
    token: null,
    id: null,
    error: null,
    loading: false,
    user: {
        name: "",
        email: "",
        profile: 0,
    }
}

export const AuthSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        addToken(state: AuthState, action: PayloadAction<Payload>) {
            let { token } = action.payload;
            state.token = token;
            let decoded: DecodedToken | null = token ? jwtDecode(token) : null;
            state.id = decoded ? decoded.data._id : null;
        },
        removeToken(state) {
            state.token = null;
            state.id = null;
            localStorage.removeItem("token");
        },

        getData(state) {
            let token = localStorage.getItem("token");
            if (token) {
                state.token = token;
                let decoded: DecodedToken | null = jwtDecode(token);
                state.id = decoded ? decoded.data._id : null;
            }
        },

        getUserById(state, action: PayloadAction<{ id: string }>) {
            if (action.payload.id) {
                state.loading = true;
                fetch(`${BACKEND_URI}/api/users/${state.id}`)
                    .then(res => res.json())
                    .then(data => {
                        state.user.name = data.name;
                        state.user.email = data.email;
                        state.user.profile = data.profile;
                    })
                    .catch(err => state.error = err.message)
                    .finally(() => state.loading = false);
            }
        }
    }
});

export const CurrentAuthState = (state: any) => state.auth;

export default AuthSlice.reducer;