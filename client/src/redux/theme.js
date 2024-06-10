// themeSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState =
  localStorage.getItem("darkMode") === "true" ? "dark" : "light";

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      const newState = state === "light" ? "dark" : "light";
      localStorage.setItem("darkMode", newState === "dark");
      return newState;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
