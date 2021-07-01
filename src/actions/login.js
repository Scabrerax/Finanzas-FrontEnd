import { fetchSinToken } from "../helpers/fetch";
import { types } from "../types/types";

import Swal from 'sweetalert2'

export const startLogin = (user) => {
  return async (dispatch) => {
    const res = await fetchSinToken("auth", user, "POST");
    const data = await res.json();
    if (data.error) {
      return {
        error: true
      }
    }else{
      localStorage.setItem("token", data.data.token);
      dispatch(login())
    }
  };
};

const login = () => {
  return {
    type: types.login,
    payload: true,
  };
};

export const startChecking = () => {
  return async (dispatch) => {
    if (localStorage.getItem('token') !== null) {
      return dispatch(login());
    }
  };
};

const logOut = () => {
  return {
    type: types.logout,
    payload: false
  }
}

export const startLogOut = () => {
  return async (dispatch) => {
    localStorage.removeItem('token')
    dispatch(logOut())
  }
}
