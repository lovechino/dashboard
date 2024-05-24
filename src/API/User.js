import axios from "axios"

const baseUrl = 'https://data-school.onrender.com/api'

export const getData =  ()=>{
    return axios.get(`${baseUrl}/students`).then(res=>res.data).catch(err=>console.log(err.message))
}


export const userLogin = (data)=>{
    return axios.post(`${baseUrl}/user/login`,data).then(res=>res.data).catch(err=>console.log(err.message))
}