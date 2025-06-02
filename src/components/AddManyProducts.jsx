import axios from "axios";
import React, { act } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { data } from "react-router-dom";

export const AddManyProducts = () => {
  const { register, handleSubmit, control } = useForm({
    defaultValues: {
      products: [
        {
          name: "",
          price: 0,
          colors:"",
          description: "",
          unit: 0,
          isAvailable: true,
        },
      ],
    },
  });
  const { append, remove, fields } = useFieldArray({
    control,
    name: "products",
  });
  const submitHandler = async(data) => {
    for(let i=0;i<data.products.length;i++){
        data.products[i].colors = data.products[i].colors.split(",")
    }
    console.log(data)
    const res = await axios.post("https://node5.onrender.com/product/addproducts",data.products)
    console.log(res)

  };
  return (
    <div style={{ textAlign: "center" }}>
      <h1>AddManyProducts</h1>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div>
          {fields.map((filed, index) => {
            return (
              <div>
                <div>
                  <label>name</label>
                  <input
                    type="text"
                    {...register(`products.${index}.name`)}
                  ></input>
                </div>
                <div>
                  <label>price</label>
                  <input
                    type="text"
                    {...register(`products.${index}.price`)}
                  ></input>
                </div>
                <div>
                  <label>description</label>
                  <input
                    type="text"
                    {...register(`products.${index}.description`)}
                  ></input>
                </div>
                <div>
                  <label>unit</label>
                  <input
                    type="text"
                    {...register(`products.${index}.unit`)}
                  ></input>
                </div>
                <div>
                  <label>status</label>
                  TRUE :
                  <input
                    type="radio"
                    {...register(`products.${index}.isAvailable`)}
                    value="true"
                  ></input>
                  FALSE :
                  <input
                    type="radio"
                    {...register(`products.${index}.isAvailable`)}
                    value="true"
                  ></input>
                </div>
                <div>
                  <label>COLORS</label>
                  <input
                    type="text"
                    placeholder="enter color  comma seperetd"
                    {...register(`products.${index}.colors`)}

                  ></input>
                </div>
              </div>
            );
          })}
          <div>
            <input type="submit"></input>
          </div>
        </div>
      </form>
      <button onClick={()=>{append( [
        {
          name: "",
          price: 0,
          colors: "",
          description: "",
          unit: 0,
          isAvailable: true,
        },
      ])}}>ADD MORE</button>
    </div>
  );
};
