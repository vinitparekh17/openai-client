import jwtDecode from 'jwt-decode';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useFetch } from '../hooks';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';

const initialState: AuthState = {
  token: null,
  id: null,
  error: null,
  loading: false,
  user: {
    id: '',
    name: '',
    email: '',
    profile: 0,
  },
};

export const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {

    updateProfile(state: AuthState, action: PayloadAction<UserData>) {
      state.user = action.payload;
    },

    SignOut(state) {
      state.token = null;
      state.id = null;
      state.user = {
        id: '',
        name: '',
        email: '',
        profile: 0,
      };
    }
  },
});

export const CurrentAuthState = (state: any) => state.auth;

export default AuthSlice.reducer;
