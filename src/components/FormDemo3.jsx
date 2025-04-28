import React from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { data } from "react-router-dom";

export const FormDemo3 = () => {
  const { handleSubmit, register, control } = useForm({
    defaultValues: {
      medicines: [{ name: "", dosage: "", frequency: "" }],
    },
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "medicines",
  });
  const submitHandler = (data) => {
    console.log(data);
  };

  return (
    <div>
      <h1>medicines form</h1>
      <button onClick={()=>{append({ name: "", dosage: "", frequency: "" })}}>ADD MORE</button>
      <form onSubmit={handleSubmit(submitHandler)}>
      
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
                <label>FREQU</label>
                <input
                  type="text"
                  {...register(`medicines.${index}.frequency`)}
                ></input>
              </div>
              
            </div>
          );
        })}
        <div>
            <input type="submit" value="submit"></input>
        </div>
      </form>
    </div>
  );
};
