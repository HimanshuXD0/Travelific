
import networkService from "../../../services/networkService";
import { handleError, handleSuccess } from "../../../utils/utils";
import { myBookingsRequest,myBookingsSuccess,myBookingsError } from "./myBookingsSlice";
import {call,put,takeLatest} from 'redux-saga/effects';

function *myBookingsSaga(action){

    try {
        const email = localStorage.getItem('userEmail')
        const token=localStorage.getItem('token');
        const response = yield call(networkService.get,{
            url: 'https://travelific-api.onrender.com/api/items',
            queryParams:{'page':1,'email':email},
            headers: { 'Content-Type': 'application/json','Authorization': `Bearer ${token}` },
        });
        console.log(response.data);
        yield put(myBookingsSuccess({bookingsInfo:response.data}));
        handleSuccess(response.data.name);
    } catch (e) {
        handleError(e.message);
    }
}
export function* watchmyBookingsSaga(){
    yield takeLatest(myBookingsRequest.type,myBookingsSaga);
}
