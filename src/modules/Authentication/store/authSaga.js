// authSaga.js
import { call, put, takeLatest } from 'redux-saga/effects';
import { loginRequest, loginSuccess, loginFailure } from './authSlice';
import networkService from '../../../services/networkService';


function* loginSaga(action) {
    try {
        const { email, password ,navigate} = action.payload;
        const url = `https://travelific-api.onrender.com/api/auth/signin`;
        const body = JSON.stringify({ email, password });
        
        const response = yield call(networkService.post, {
            url: url,
            body: body,
            headers: { 'Content-Type': 'application/json' },
        });
        const { success, token, name } = response.data;
        
        if (success) {
            yield put(loginSuccess({ token, user: name }));
            localStorage.setItem('token', token);
            localStorage.setItem('loggedInUser', name);
            console.log(localStorage.getItem('loggedInUser'));
             navigate('/dashboard');
        } else {
            throw new Error(response.data.message);
        }
    } catch (error) {
        yield put(loginFailure(error.message || 'Login failed'));
    }
}

export function* watchLoginSaga() {
    yield takeLatest(loginRequest.type, loginSaga);
}
