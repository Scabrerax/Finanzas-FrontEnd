import { types } from "../types/types";

const initialState = {
  isLogged: false
}

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.login:
      return {
        ...state,
        isLogged: action.payload,
      }
    case types.logout:
      return {
        isLogged: false
      }
    default:
      return state;
  }
}
