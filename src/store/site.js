import { createSlice } from "@reduxjs/toolkit";

export const site = createSlice({
  name: "site",
  initialState: {
    darkStatus: false,
  },
  reducers: {
    setDarkMode: (state) => {
      state.darkStatus = !state.darkStatus;
    },
  },
});

export const { setDarkMode } = site.actions;
export default site.reducer;
