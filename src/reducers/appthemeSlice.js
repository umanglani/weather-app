import { createSlice } from "@reduxjs/toolkit";

const appThemeSlice = createSlice({
    name: 'appTheme',
    initialState: {isDarkMode: false},
    reducers: {
        toggleTheme(state, action) {
            state.isDarkMode = !stat.isDarkMode;
        },
    }
});

export const { toggleTheme } = appThemeSlice.actions;
export default appThemeSlice.reducer;
