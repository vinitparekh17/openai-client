import jwtDecode from "jwt-decode";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthState, Payload, DecodedToken } from "../types/auth";

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
        },

        getData(state) {
            let token = localStorage.getItem("token");
            if (token) {
                state.token = token;
                let decoded: DecodedToken | null = jwtDecode(token);
                state.id = decoded ? decoded.data._id : null;
            }
        },

        getDataById(state, action: PayloadAction<{ id: string }>) {
            if (action.payload.id) {
                fetch(`http://localhost:5000/api/users/${state.id}`)
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        return data;
                    })
                    .catch(err => console.log(err));
            }
        }
    }
});

export const CurrentAuthState = (state: any) => state.auth;

export default AuthSlice.reducer;