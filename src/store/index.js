import { createStore } from "redux";
import storeReducer from "./storeReducer";

export default createStore(storeReducer);

export { Load, Unload, setError, hideError } from "./actionCreators";