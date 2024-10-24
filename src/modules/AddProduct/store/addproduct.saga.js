import { call, put, takeLatest,all } from 'redux-saga/effects';
import { addProductRequest,addProductError,addProductSuccess } from './addproduct.slice';
import networkService from '../../../services/networkService';
import { handleError, handleSuccess } from '../../../utils/utils';

function *addProductSaga(action){
    try {
       
        const {name,price,navigate}=action.payload;
        console.log(name)
        console.log(price)
        const response= yield call(networkService.post, {             // way of calling method in call is differnet see here
            url: 'https://travelific-api.onrender.com/api/items',
            body: JSON.stringify({name,price}),
            headers: { 'Content-Type': 'application/json' },
          });
          
        const {success,message}=response.data;
        if(success===true) {
            yield put(addProductSuccess({success:success}));
            handleSuccess(message);
            setTimeout(() => {
                navigate('/dashboard')
            }, 1000);
        }else{
            handleError(message);
            yield put(addProductError(message));
        }
    } catch (e) {
        handleError(e.message);
        yield put(addProductError(e.message));
    }
}

export function* watchaddProductSaga(){
    yield takeLatest(addProductRequest.type,addProductSaga);
}