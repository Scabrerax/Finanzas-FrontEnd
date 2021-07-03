import {types} from '../types/types'

export const setModalMsg = (err) =>({
    type: types.setModalMsg,
    payload: err,
})

export const removeModalMsg = () =>({
    type: types.removeModalMsg,
})
