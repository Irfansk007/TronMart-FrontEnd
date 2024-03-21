"use server"

import axios from "axios"

const url = "http://localhost:8000/auth/getProducts"
export const getItems = async() =>{
    try {
        const {data} = await axios.get(url)
       // console.log(data)
        return data
    } catch (error) {
        //console.log(error)
        return null
    }
}



