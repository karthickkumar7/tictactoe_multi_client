import { createSlice } from "@reduxjs/toolkit";

import { login, register } from "../thunk/authThunk";

const initialState = {
    isLoggedIn: false,
    isLoading: false,
};

register();
login();

const authSlice = createSlice({
    name: "auth",

    initialState,

    reducers: {},

    extraReducers: (builder) => {
        // register
        builder.addCase(register.pending, (state, { payload }) => {});
        builder.addCase(register.fulfilled, (state, { payload }) => {});
        builder.addCase(register.rejected, (state, { payload }) => {});
        // login
        builder.addCase(login.pending, (state, { payload }) => {});
        builder.addCase(login.fulfilled, (state, { payload }) => {});
        builder.addCase(login.rejected, (state, { payload }) => {});
    },
});

export default authSlice.reducer;
