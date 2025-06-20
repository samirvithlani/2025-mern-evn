import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { addIdToStore } from './redux/AuthSlice'

export const Login = () => {
    const {register,handleSubmit}=useForm()
    const dispatch = useDispatch()
    const submitHandler = async(data)=>{
        const res = await axios.post("https://node5.onrender.com/user/login",data)
        if(res.status==200){
            toast.success("login success....")
            dispatch(addIdToStore(res.data.data._id))
        }
    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>LOGIN COMPONENT</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>EMAIL</label>
                <input type='text' {...register("email")}></input>
            </div>
            <div>
                <label>PASSWORD</label>
                <input type='text' {...register("password")}></input>
            </div>
            <div>
                <input type='submit'></input>
            </div>
        </form>
    </div>
  )
}
