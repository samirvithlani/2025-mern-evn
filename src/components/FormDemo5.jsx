import React from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo5 = () => {
    const {register,handleSubmit,formState:{errors},trigger} = useForm()
    const submitHandler = (data) => {
        console.log(data)
    }
    const validationSchema = {
        nameValidator :{
            required : {
                value : true,
                message : "Name is required"
            },
            minLength : {
                value : 5,
                message : "Name should be minimum 5 characters"
            },
            maxLength : {
                value : 10,
                message : "Name should be maximum 10 characters"
            }
        },
        emailValidator:{
            required : {
                value : true,
                message : "Email is required"
            },
           minLength:{
                value : 5,
                message : "Email should be minimum 5 characters"
            },
            maxLength:{
                value : 10,
                message : "Email should be maximum 10 characters"
            }
           }
        }
    
  return (
    <div>
        <h1>FORM DEMO 5</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>NAME</label>
                <input type='text' {...register("name",validationSchema.nameValidator)}
                onInput={async(e)=>{
                    await trigger("name")
                }}></input>
                {errors.name?.message}
            </div>
            <div>
                <label>EMAIL</label>
                <input type='text' {...register("email",validationSchema.emailValidator)}
                onBlur={async()=>{
                    await trigger("email")
                }}
                ></input>
                {errors.email?.message}
            </div>
            <div>
                <label>AGE</label>
                <input type='text' {...register("age")}></input>
            </div>
            <div>
                <input type='submit'></input>
            </div>

        </form>
    </div>
  )
}
