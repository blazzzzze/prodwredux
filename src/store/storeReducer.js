import { LOAD, UNLOAD, SET_ERROR, HIDE_ERROR } from "./actionTypes";
import { intialStore } from "./initialStore";

export default (state, action) => {
    switch (action.type) {

        case LOAD:
            return {
                ...state,
                products: action.payload
            };

        case UNLOAD:
            return {
                ...state,
                products: []
            }

        case SET_ERROR:
            return {
                ...state, 
                showError: true,
                errMessage: action.payload
            }

        case HIDE_ERROR:
            return {
                ...state,
                showError: false,
                errMessage: ""
            }

        default:
            return state || intialStore;
    }
};
