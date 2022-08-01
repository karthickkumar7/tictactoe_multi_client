import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { loginApi, registerApi } from "../api";

const initialState = {
  isLoggedIn: false,
  isLoading: false,
  isSuccess: false,
  isError: false,
  success: null,
  error: null,
};

export const register = createAsyncThunk(
  "auth/register",
  async (payload, thunkApi) => {
    try {
      const { data } = await registerApi(payload);
      return data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.data);
    }
  }
);

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

const authSlice = createSlice({
  name: "auth",

  initialState,

  reducers: {
    resetState: (state, { payload }) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.success = null;
      state.error = null;
    },
  },

  extraReducers: {
    [login.pending]: (state, { payload }) => {
      state.isLoading = true;
      state.isError = false;
      state.isSuccess = false;
      state.error = null;
      state.success = null;
    },
    [login.fulfilled]: (state, { payload }) => {
      state.isLoggedIn = true;
      state.isLoading = false;
      state.isSuccess = true;
      state.isError = false;
      state.error = null;
      state.success = payload.msg;
    },
    [login.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
      state.success = null;
      state.error = payload.msg;
    },
  },
});

export const { resetState } = authSlice.actions;

export default authSlice.reducer;
