import { START_LOAD, LOAD, UNLOAD, HIDE_ERROR, SET_ERROR } from "./actionTypes";

export const StartLoad = () => ({
    type: START_LOAD
});

export const Load = (products) => {
    return {
        type: LOAD,
        payload: products
    }
}

export const Unload = () => {
    return {
        type: UNLOAD
    }
}

export const setError = (message) => {
    return {
        type: SET_ERROR,
        payload: message
    }
}

export const hideError = () => {
    return {
        type: HIDE_ERROR
    }
}