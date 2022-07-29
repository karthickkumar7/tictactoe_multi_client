import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  profile: false,
};

const settingSlice = createSlice({
  name: "settings",

  initialState,

  reducers: {
    showProfile: (state) => {
      state.profile = !state.profile;
    },
  },
});

export const { showProfile } = settingSlice.actions;

export default settingSlice.reducer;
