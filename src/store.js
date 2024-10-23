// store.js
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects'; 
import authReducer from './modules/Authentication/store/authSlice';
import signupReducer from './modules/Authentication/store/signUpSlice';
import { watchLoginSaga, watchLoginFailureSaga } from './modules/Authentication/store/authSaga';
import  {watchSignupSaga}  from './modules/Authentication/store/signUpSaga'; // Import the signup saga

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        auth: authReducer,
        signup:signupReducer,
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware({ serializableCheck: false }).concat(sagaMiddleware),
});

// Combine all your sagas here
function* rootSaga() {
    yield all([
        watchLoginSaga(),
        watchLoginFailureSaga(),
        watchSignupSaga(), // Add the signup saga here
    ]);
}

sagaMiddleware.run(rootSaga); // Run the combined root saga

export default store;
