import axios from "./config"

export const userLogin = async (data)=>{
    return (await axios.post('/user/login',data)).data
}