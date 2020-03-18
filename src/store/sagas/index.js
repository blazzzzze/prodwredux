import { fork, take, call, put } from "redux-saga/effects";
import { START_LOAD } from "../actionTypes";
import { Load, setError } from "../actionCreators";
import  ProductService from "../../web/ProductService";
import apiRoutes from "../../routes/apiRoutes";

const productSvc = new ProductService(apiRoutes.products.url, () => { });

export default function* rootSaga() {

    yield fork(watchFetchProduct); 

}

function* watchFetchProduct() {
    while (true) {
        yield take(START_LOAD); //Ждем FETCH_START
        try {
            const { data } = yield call(productSvc.load); // выполняем загрузку данных из веб-сервиса
            yield put(Load(data)); // сохранить данные через reducer
        }
        catch (e) {
            yield put(setError(e.message));
        }
    }
}