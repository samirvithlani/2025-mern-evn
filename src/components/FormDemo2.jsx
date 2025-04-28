import React from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo2 = () => {
    const {register,handleSubmit,formState:{errors}}= useForm({
        defaultValues:{
            name:"test"
        }
    })
    console.log("errors",errors)//{}
    const submitHandler = (data)=>{
        alert("form subbmited...")
        console.log("data.,,,",data)
    }

    const validationSchema = {
        ageValidator:{
            required:{
                value:true,
                message:"age is required.."
            },
            min:{
                value:18,
                message:"min age 18"
            },
            max:{
                value:60,
                message:"max age is 60"
            }
        },
        addressValidator:{
            required:{
                value:true,
                message:"age is required.."
            },
            minLength:{
                value:10,
                message:"min 10 char required"
            },
            maxLength:{
                value:50,
                message:"max 50 char required"
            }
        },
        contactValidator:{
            required:{
                value:true,
                message:"contact is required"
            },
            pattern:{
                value:/[6-9]{1}[0-9]{9}/,
                message:"contact is invalid."
            }
        }
    }

  return (
    <div>
        <h1>FORM DEMO 2</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>NAME</label>
                <input type='text' {...register("name",{required:{value:true,message:"name is required*"}})}></input>
                {/* {errors.name && errors.name.message} */}
                {errors.name?.message}
            </div>
            <div>
                <label>AGE</label>
                <input type='text' {...register("age",validationSchema.ageValidator)}></input>
                {errors.age?.message}
            </div>
            <div>
                <label>Address</label>
                <textarea {...register("address",validationSchema.addressValidator)}></textarea>
                <span style={{color:"red"}}>
                    {errors.address?.message}
                </span>
            </div>
            <div>
                <label>CONTACT</label>
                <input type='text' {...register("contact",validationSchema.contactValidator)}></input>
                {errors.contact?.message}
            </div>
            <div>
                <input type='submit' value="submit"></input>
            </div>

        </form>
    </div>
  )
}
