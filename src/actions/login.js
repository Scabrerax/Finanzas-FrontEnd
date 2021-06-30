import {fetchSinToken } from "../helpers/fetch"

export const startLogin = (user) =>{
    return async(dispatch)=>{
        const res = await fetchSinToken('auth',user,'POST')
        const data = await res.json()

        if(data.error){
            return console.log(data.error)
        }
        localStorage.setItem('token',data.data)
    }
}