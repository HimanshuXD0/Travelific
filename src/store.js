// store.js
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import authReducer from './modules/Authentication/store/authSlice';
import { watchLoginSaga } from './modules/Authentication/store/authSaga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        auth: authReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false}).concat(sagaMiddleware),
});

sagaMiddleware.run(watchLoginSaga);

export default store;
