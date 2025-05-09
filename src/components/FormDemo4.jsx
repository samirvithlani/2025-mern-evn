import React, { useState } from 'react'
import { useFieldArray, useForm } from 'react-hook-form'

export const FormDemo4 = () => {

    const {handleSubmit, register, control} = useForm({
        defaultValues: {
            medicines: [{name: "", dosage: "", frequency: ""}], 
        }
    });

    const [userData, setuserData] = useState({});
    const [isSubbmited, setisSubbmited] = useState(false)

    const {fields, append, remove} = useFieldArray({
        control, 
        name: "medicines", 
    });

    const submitHandler = (data) => {
        setuserData(data);
        setisSubbmited(true)
        console.log(data);
    }
    

  return (
    <div>
        <h1>Medicine Prescription</h1>
        <form onSubmit={handleSubmit(submitHandler)}>

            <div>
                <label>NAME</label>
                <input type='text' {...register("patientName")}></input>
            </div>
            
            <div>
                <label>Date</label>
                <input type='date' {...register("date")}></input>
            </div>

            {fields.map((field, index) => {
          return (
            <div>
              <div>
                <label>MEDICINE NAME</label>
                <input
                  type="text"
                  {...register(`medicines.${index}.name`)}
                ></input>
              </div>
              <div>
                <label>DOSAGE</label>
                <input
                  type="text"
                  {...register(`medicines.${index}.dosage`)}
                ></input>
              </div>
              <div>
                <label>FREQUENCY</label>
                <input
                  type="text"
                  {...register(`medicines.${index}.frequency`)}
                ></input>
              </div>
              <br></br>
            </div>
          );
        })}
        <br></br>
        <button onClick={()=>{append({ name: "", dosage: "", frequency: "" })}}>ADD MORE</button>
        <button onClick={()=>{remove(index)}}>REMOVE</button>
        <div>
            <input type="submit" value="submit"></input>
        </div>

        </form>

        <h1>OUTPUT</h1>
        {
            isSubbmited  && 
            <div>
                <li>Patient name = {userData.patientName}</li>
                <li>Date = {userData.date}</li>
                <li> Medicine Name = {userData.medicines.name}</li>
                <li>dosage = {userData.dosage}</li>
                <li>frequency = {userData.frequency}</li>
        </div>
        }

    </div>
  )
}
