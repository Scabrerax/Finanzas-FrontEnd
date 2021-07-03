import { types } from "../types/types";

const initialState = {
  modalMsg: null
}

export const modalMsgReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.setModalMsg:
      return {
        ...state,
        modalMsg: action.payload,
      }
    case types.removeModalMsg:
      return {
        ...state,
        modalMsg: null,
      }
    default:
      return state
  }
}