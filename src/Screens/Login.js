import './css/Login.css'
import schoolimg from '../Img/—Pngtree—school campus cartoon school student_3806088.png'
import { useState } from 'react'
import { getData, userLogin } from '../API/User'
import axios from 'axios'
const Login = ()=>{
    const[username,setUsername] = useState('')
    const[password,setPassword] = useState('')
    const onSubmit = async ()=>{
        // console.log({username:username,password:password})
        // const user = userLogin({username:username,password:password})
        // console.log(user)
        // const stu = await getData()
        // console.log(stu)
        const user = await userLogin({username:username,password:password})
        console.log(user)
    }
    return(
        <div className="login-form">
            <img className='img-school' src={schoolimg}/>
            <div className='input-form'>
            <div className="form_row">
                <label className="form_label">Username</label>
                <input className="form_input" type="text" placeholder="Username" value={username} onChange={e=>setUsername(e.target.value)}/>
            </div>
            <div className="form_row">
                <label className="form_label">Password</label>
                <input className="form_input" type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)}/>
            </div>
            <button className='login-button' onClick={()=>onSubmit()}>Login</button>
            </div>
        </div>
    )
}

export default Login