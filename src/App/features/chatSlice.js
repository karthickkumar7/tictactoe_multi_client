import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  _id: "2",
  chats: [],
};

const chatSlice = createSlice({
  name: "chat",

  initialState,

  reducers: {
    updateChat: (state, { payload }) => {
      state.chats = payload;
    },
  },
});

export const { updateChat } = chatSlice.actions;

export default chatSlice.reducer;
