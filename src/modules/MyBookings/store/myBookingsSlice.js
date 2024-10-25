import {createSlice} from '@reduxjs/toolkit';

 const initialState = {
    loading : false,
    error:null,
    bookingsInfo:null,
 };

 const myBookingsSlice = createSlice({
    name : "mybookings",
    initialState,
    reducers :{
        myBookingsRequest:(state,action)=>{
            state.loading = true;
            state.error=null;
        },
        myBookingsSuccess:(state,action)=>{
            state.loading = false;
            state.error=null;
            state.bookingsInfo=action.payload.bookingsInfo;
        },
        myBookingsError:(state,action)=>{
            state.loading = false;
            state.error=null;
        },
    }
 });

 export const {myBookingsRequest,myBookingsSuccess,myBookingsError}=myBookingsSlice.actions;
 export default myBookingsSlice.reducer;