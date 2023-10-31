import axios from "axios"
import { getCookie, setCookie } from "./cookies"

export async function Logout(){
    const userCookie = JSON.parse(getCookie('cyl_user'))
    axios.delete(`http://localhost:3001/auth/logout/${userCookie.refreshToken}`)
    .then(res => console.log(res))
    .catch(err => console.log(err))
    
    const currentDate = new Date(0)
    setCookie('cyl_user', '', currentDate.toUTCString())
}

export async function Update(){
    const userCookie = JSON.parse(getCookie('cyl_user'))
    axios.post('http://localhost:3001/token/refresh', {token: userCookie.refreshToken})
    .then(response => {
        const { newAccessToken } : {newAccessToken: string} = response.data           
        setCookie('cyl_user', 
            JSON.stringify({...userCookie, accessToken: newAccessToken}))
    })
    .catch(error => console.log(error))
}