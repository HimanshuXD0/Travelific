// signUpSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { Navigate } from 'react-router-dom';

const initialState = {
    isLoading: false,
    isAuthenticated: false,
    error: null,
    success: false,
    navigate:null
};

const signUpSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        signupRequest: (state,action) => {
            state.isLoading = true;
            state.error = null;
            state.success = action.payload.success;
            state.navigate = action.payload.navigate

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
