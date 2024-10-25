// authSaga.js
import { call, put, takeLatest } from 'redux-saga/effects';
import { loginRequest, loginSuccess, loginFailure } from './authSlice';
import networkService from '../../../services/networkService';
import { handleError, handleSuccess } from '../../../utils/utils';


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
        const { success, token, name, message } = response.data;
        console.log(message)
        console.log(success)
        if (success===true) {
            yield put(loginSuccess({ token, user: response.data, isAuthenticated:true}));
            handleSuccess(message);
            localStorage.setItem('token', token);
            localStorage.setItem('loggedInUser', name);
            localStorage.setItem('userEmail',email);
            setTimeout(() => {
                navigate('/dashboard');
            }, 1000)
        } else {
            const error = message
            yield put(loginFailure({error,stateOnly:false}));
        }
    } catch (error) { 
        yield put(loginFailure({error,stateOnly:false}));   //-> when we need to dispatch in worker saga we use "put" keyword
    }                                                               //-> instead of "dispatch" keyword

}

function *loginFailureSaga(action){
    const {stateOnly}=action.payload;
    if(!stateOnly){
        return handleError(action.payload.error);
    };
}
  
export function* watchLoginFailureSaga(){
   yield takeLatest(loginFailure.type,loginFailureSaga)
}
export function* watchLoginSaga() {
    yield takeLatest(loginRequest.type, loginSaga);
}
