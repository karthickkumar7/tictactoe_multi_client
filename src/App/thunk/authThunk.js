import { createAsyncThunk } from "@reduxjs/toolkit";

import { registerApi, loginApi } from "../api/authApi";

export const register = createAsyncThunk(
    "auth/register",
    async (payload, thunkApi) => {
        try {
            const { data } = await registerApi(payload);
            return data;
        } catch ({ response }) {
            return thunkApi.rejectWithValue(response.data);
        }
    }
);

export const login = createAsyncThunk(
    "auth/login",
    async (payload, thunkApi) => {
        try {
            const { data } = await loginApi(payload);
            return data;
        } catch ({ response }) {
            return thunkApi.rejectWithValue(response.data);
        }
    }
);
