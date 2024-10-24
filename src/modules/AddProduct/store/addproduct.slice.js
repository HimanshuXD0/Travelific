import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    loading: false,
    error: null,
    name: '',
    price: '',
};

const addProductSlice = createSlice({
    name: "addproduct",
    initialState,
    reducers: {
        addProductRequest: (state, action) => {
            state.loading = true;
            state.error = null;
            state.name = action.payload.name;  // Use semicolon instead of comma
            state.price = action.payload.price;
        },
        addProductSuccess: (state, action) => {
            state.loading = false;
            state.message = action.payload.message;
        },
        addProductError: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;  // `error` instead of `message`
        },
    }
});

export const { addProductRequest, addProductSuccess, addProductError } = addProductSlice.actions;
export default addProductSlice.reducer;
