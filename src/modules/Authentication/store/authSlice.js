// authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isAuthenticated: false,
    token: null,
    userInfo: null,
    loading: false,
    error: null,
    stateOnly:true
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginRequest: (state) => {
            state.loading = true;
            state.error = null;
        },
        loginSuccess: (state, action) => {
            state.loading = false;
            state.isAuthenticated = true;
            state.token = action.payload.token;
            state.userInfo = action.payload.user;
        },
        loginFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload.error;
            state.stateOnly=action.payload.stateOnly;
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.token = null;
            state.userInfo = null;
        }
    }
});

export const { loginRequest, loginSuccess, loginFailure, logout } = authSlice.actions;

export default authSlice.reducer;
