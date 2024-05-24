import axios from "axios";

const instance = axios.create({
    baseURL :'https://data-school.onrender.com/api'
})
instance.interceptors.request.use(function(res){
    return res.data
},function(err){
    return Promise.reject(err)
}
)

export default instance