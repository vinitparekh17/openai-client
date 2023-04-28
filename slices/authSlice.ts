import jwtDecode from 'jwt-decode';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Payload = { token: string | null }

type AuthState = {
    token: string | null,
    id: string | null,
}

type DecodedToken = {
    data: {
        _id: string;
        exp: number;
        iat: number;
    }
}

const initialState: AuthState = {
    token: null,
    id: null,
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
        }
    }
});

export const CurrentAuthState = (state: any) => state.auth;

export default AuthSlice.reducer;