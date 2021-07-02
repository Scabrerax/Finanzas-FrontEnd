import { types } from "../types/types";

const initialState = { modalOpen: false }

export const modalReducer = (state=initialState, action) => {
  switch (action.type) {
    case types.OpenModal:
      return {
        ...state,
        modalOpen: true
      }
    case types.CloseModal:
      return {
        ...state,
        modalOpen: false
      }

    default:
      return state;
  }
}