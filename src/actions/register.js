import { fetchSinToken } from "../helpers/fetch"
import { types } from "../types/types"
import { setModalMsg } from "./modalMsg";
import { OpenModal } from "./modal";

export const startRegister = (user) => {
  return async (dispatch) => {
    const res = await fetchSinToken('auth/register', user, 'POST')
    const data = await res.json()
    if (data.error) {
      if (data.message === 'Bad data') {
        dispatch(setModalMsg('Este correo ya se encuentra registrado'))
        dispatch(OpenModal())
      } else if (data.message === 'passwords do not math'){
        dispatch(setModalMsg('Las contraseñas no coinciden'))
        dispatch(OpenModal())
      } else {
        console.log(data.message)
        dispatch(setModalMsg('Lo sentimos, algo salió mal'))
        dispatch(OpenModal())
      }
    } else {
      localStorage.setItem('token', data.data.token)
      // Swal.fire('Success', data.message, 'success')
      dispatch(register())
    }
  }
}

const register = () => {
  return {
    type: types.login,
    payload: true,
  };
};