export const LOAD = "LOAD";
export const UNLOAD = "UNLOAD";
export const SET_ERROR = "SET_ERROR";
export const HIDE_ERROR = "HIDE_ERROR";


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