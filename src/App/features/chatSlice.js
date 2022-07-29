import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentChat: null,
};

const chatSlice = createSlice({
  name: "chat",

  initialState,

  reducers: {
    setCurrentChat: (state, { payload }) => {
      state.currentChat = payload;
    },
  },

  extraReducers: {},
});

export const { setCurrentChat } = chatSlice.actions;

export default chatSlice.reducer;
