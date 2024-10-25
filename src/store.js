// store.js
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects'; 
import authReducer from './modules/Authentication/store/authSlice';
import signupReducer from './modules/Authentication/store/signUpSlice';
import myBookingsReducer from './modules/MyBookings/store/myBookingsSlice'
import { watchLoginSaga, watchLoginFailureSaga } from './modules/Authentication/store/authSaga';
import  {watchSignupSaga}  from './modules/Authentication/store/signUpSaga'; // Import the signup saga
import addProductReducer from './modules/AddProduct/store/addproduct.slice';
import { watchaddProductSaga } from './modules/AddProduct/store/addproduct.saga';
import { watchmyBookingsSaga } from './modules/MyBookings/store/myBookingsSaga';
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        auth: authReducer,
        signup:signupReducer,
        addproduct:addProductReducer,
        mybookings:myBookingsReducer,
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware({ serializableCheck: false }).concat(sagaMiddleware),
});

// Combine all your sagas here
function* rootSaga() {
    yield all([
        watchLoginSaga(),
        watchLoginFailureSaga(),
        watchSignupSaga(),
        watchaddProductSaga(),
        watchmyBookingsSaga(),
    ]);
}

sagaMiddleware.run(rootSaga); // Run the combined root saga

export default store;
