import { types } from "../types/types";

const initialState = {
    msgError : null
}

export const alertaReducer = (state = initialState,action) =>{
    switch (action.type) {
        case types.setError:
            return{
                ...state,
                msgError: action.payload,
            }
        case types.removeError:
            return{
                ...state,
                msgError: null,
            }
        default:
            return state
    }
}