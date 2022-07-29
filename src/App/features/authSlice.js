import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { loginApi } from "./api";

// state
const initialState = {
  isLoggedIn: false,
  isSuccess: false,
  isError: null,
  isLoading: false,
  error: null,
  success: null,
  user: null,
  sid: null,
};

//asyncThunk

export const login = createAsyncThunk(
  "auth/login",
  async (payload, thunkApi) => {
    try {
      const { data } = await loginApi(payload);
      return data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.response.data);
    }
  }
);

// authSlice

const authSlice = createSlice({
  name: "auth",

  initialState,

  reducers: {
    updateSid: (state, { payload }) => {
      state.sid = payload;
    },
  },

  extraReducers: {
    [login.pending]: (state) => {
      state.isLoading = true;
    },
    [login.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.isError = false;
      state.error = null;
      state.isLoggedIn = true;
      // state.success = payload.msg;
      state.user = payload.user;
    },
    [login.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
      state.success = null;
      state.error = payload.err;
    },
  },
});

export const { updateSid } = authSlice.actions;

export default authSlice.reducer;
