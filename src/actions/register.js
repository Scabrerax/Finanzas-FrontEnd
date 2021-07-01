import { fetchSinToken } from "../helpers/fetch"

import Swal from 'sweetalert2'
import { types } from "../types/types"

export const startRegister = (user) =>{
    return async(dispatch) =>{
        const res = await fetchSinToken('auth/register',user,'POST')
        const data = await res.json()
        if(data.error){
            Swal.fire('Error', data.message, 'error')
        }else{
            localStorage.setItem('token',data.data.token)
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