import { fetchSinToken } from "../helpers/fetch";
import { types } from "../types/types";

export const startLogin = (user) => {
  return async (dispatch) => {
    const res = await fetchSinToken("auth", user, "POST");
    const data = await res.json();

    if (data.error) {
      return console.log(data.error);
    }
    localStorage.setItem("token", data.data.token);

    dispatch(login());
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
    return dispatch(logOut());
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
