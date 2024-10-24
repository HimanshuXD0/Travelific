// authSaga.js
import { call, put, takeLatest,all } from 'redux-saga/effects';
import { signupRequest, signupSuccess, signupFailure } from './signUpSlice';
import networkService from '../../../services/networkService';
import { handleSuccess } from '../../../utils/utils';


function* signupSaga(action) {;
    try {
        const { name, email, password, state, city, mobile, navigate} = action.payload;
        //const {navigate} = action.payload.navigate;
        const url = `https://travelific-api.onrender.com/api/auth/signup`;
        const body = JSON.stringify({ name, email, password, state, city, mobile });
        
        const response = yield call(networkService.post, {
            url: url,
            body: body,
            headers: { 'Content-Type': 'application/json' },
        });

        const { success, message, error } = response.data;
        console.log(success)
        if (success) {
            yield put(signupSuccess({success:success}));
            // const t = useSelector((state) => state.signup.success);
            // const h = action.payload.success;
            // console.log(h);
            

            handleSuccess("Account Created");
            setTimeout(() => {
                navigate('/login');
            }, 3000);
            // Optionally navigate or trigger any side effects
        } else {
            yield put(signupFailure(error));
        }
    } catch (error) {
        yield put(signupFailure(error.message || 'Signup failed'));
    }
}

export function* watchSignupSaga() {
    yield takeLatest(signupRequest.type, signupSaga);
}
