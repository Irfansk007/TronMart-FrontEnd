"use server"
import { cookies } from 'next/headers'
import axios from "axios"
interface signUpProps{
    name: string,
    email: string,
    password: string
}


const url = "http://localhost:8000"
export async function SignUpAction({name,email,password}:signUpProps){
    try {
        const auth = await axios.post(`${url}/auth/register`,{name,email,password})
        console.log(auth.status)
        return auth.status
    } catch (error) {
        return 500
    }
}


export async function LoginAction(formData:FormData){
  
    try {
        const response = await axios({
            url:`${url}/auth/login`,
            method: "POST",
            headers: { "Content-Type": "multipart/form-data" },
            data: formData
        })
        //@ts-ignore
      await cookies().set('token', response?.headers["set-cookie"][0])
        // if(response.headers["set-cookie"]){
        //     document.cookie = response?.headers["set-cookie"][0] 
        // }
       
       
        
     return response.status
    } catch (error) {
        //@ts-ignore
        
        return error?.response?.status 
    }
}

export const authCheck = async()=>{

    
    try {
        const response  = await axios.get(`${url}/auth/checkUser`,{
            headers:{
                Cookie: cookies().get('token')?.value
            }
        })
        return response.data.name
    } catch (error) {
        return null
    }
}


 export const cacheClean = ()=>{
    cookies().delete('token')
}


export const adminLogin = async(formdata:FormData)=>{
    try {
        const response = await axios({
            url:`${url}/auth/admin/login`,
            data: formdata,
            method: 'GET'
        })
        console.log(response)
        cookies().delete('token')
        //@ts-ignore
        await cookies().set('adminToken', response?.headers["set-cookie"][0])
        return response.status
    } catch (error) {
        //@ts-ignore
        return error.response.status
    }
}

 export const adminLogOut = ()=>{
    cookies().delete('adminToken')
}