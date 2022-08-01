import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  darkMode: false,
};

const settingsSlice = createSlice({
  name: "settings",

  initialState,

  reducers: {
    resetState: (state, { payload }) => {
      state.darkMode = false;
    },
  },

  extraReducers: {},
});

export const { resetState } = settingsSlice.actions;

export default settingsSlice.reducer;
