// store.js
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects'; 
import authReducer from './modules/Authentication/store/authSlice';
import signupReducer from './modules/Authentication/store/signUpSlice';
import { watchLoginSaga, watchLoginFailureSaga } from './modules/Authentication/store/authSaga';
import  {watchSignupSaga}  from './modules/Authentication/store/signUpSaga'; // Import the signup saga
import addProductReducer from './modules/AddProduct/store/addproduct.slice';
import { watchaddProductSaga } from './modules/AddProduct/store/addproduct.saga';
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        auth: authReducer,
        signup:signupReducer,
        addproduct:addProductReducer,
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
        watchaddProductSaga(), // Add the signup saga here
    ]);
}

sagaMiddleware.run(rootSaga); // Run the combined root saga

export default store;
