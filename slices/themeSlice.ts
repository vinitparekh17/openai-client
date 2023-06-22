import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ThemeState = {
    theme: string;
}

const initialState: ThemeState = {
    theme: "light",
}

export const ThemeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        changeTheme(state: ThemeState, action: PayloadAction<{ theme: string }>) {
            state.theme = action.payload.theme;
        },
    }
});

export const currentTheme = (state: any) => state.theme;
export default ThemeSlice.reducer;