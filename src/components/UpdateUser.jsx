import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify';

export const UpdateUser = () => {
    const id = useParams().id;

    const {register,handleSubmit} = useForm({defaultValues:async()=>{
        const res = await axios.get("https://node5.onrender.com/user/user/"+id); //{object}
        return res.data.data
    }});

    const submitHandler = async(data) => {
        console.log(data)
        delete data._id; //remove id from data
        try{
        const res = await axios.put("https://node5.onrender.com/user/user/"+id, data);
        console.log(res);
        }catch(err){
            toast.error("Something went wrong while updating user..")
            //alert("Something went wrong while updating user..")
        }
    }
  return (
    <div>
        <h1>UPDATE USER</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>NAME</label>
                <input type="text" {...register("name")} />
            </div>
            <div>
                <label>EMAIL</label>
                <input type="email" {...register("email")} />
            </div>
            <div>
                <label>AGE</label>
                <input type="number" {...register("age")} />
            </div>
            <div>
                <label>IS ACTIVE</label>
                <input type='radio' value="true" {...register("isActive")} /> YES
                <input type='radio' value="false" {...register("isActive")} /> NO
            </div>
            <div>
                <input type="submit" value="UPDATE USER" className='btn btn-primary' />
            </div>
            

        </form>
    </div>
  )
}
