import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type isMobile = boolean | null;

export const DeviceSlice = createSlice({
  name: 'device',
  initialState: {
    isMobile: null as isMobile,
  },
  reducers: {
    setIsMobile(state, action: PayloadAction<boolean>) {
      state.isMobile = action.payload;
    },
  },
});

export const { setIsMobile } = DeviceSlice.actions;
export default DeviceSlice.reducer;
