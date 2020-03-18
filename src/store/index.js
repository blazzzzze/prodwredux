import { createStore, applyMiddleware } from "redux";
import storeReducer from "./storeReducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

export default createStore(storeReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export { Load, Unload, setError, hideError, StartLoad } from "./actionCreators";
export { START_LOAD, LOAD, HIDE_ERROR, SET_ERROR, UNLOAD } from "./actionTypes";