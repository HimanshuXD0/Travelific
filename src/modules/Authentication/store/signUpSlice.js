// signUpSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLoading: false,
    isAuthenticated: false,
    error: null,
    success: false,
    userinfo:null
};

const signUpSlice = createSlice({
    name: 'signup',
    initialState,
    reducers: {
        signupRequest: (state,action) => {
            state.isLoading = true;
            state.error = null;
            state.success = action.payload.success;
            state.userinfo = action.payload.userinfo;
        },
        signupSuccess: (state, action) => {
            state.isLoading = false;
            state.isAuthenticated = true; // Set to true or handle as necessary
            state.success = action.payload.success;
        },
        signupFailure: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
    },
});

export const { signupRequest, signupSuccess, signupFailure } = signUpSlice.actions;

export default signUpSlice.reducer;
