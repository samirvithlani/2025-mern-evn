import React, { useState } from "react";
import { useForm } from "react-hook-form";

export const FormDemo1 = () => {
  const { register, handleSubmit } = useForm();
  const [userData, setuserData] = useState({});
  const [isSubbmited, setisSubbmited] = useState(false)
  //register : is an object : state variable..
  //register: {}
  //handleSubmit --> function
  const submitHandler = (data) => {

    console.log("data...", data);
    setuserData(data);
    setisSubbmited(true)

  };
  return (
    <div>
      <h1>FORM DEMO 1</h1>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div>
          <label>NAME</label>
          <input type="text" {...register("name")}></input>
        </div>
        <div>
          <label>AGE</label>
          <input type="number" {...register("age")}></input>
        </div>
        <div>
          <label>GENDER</label>
          <br></br>
          MALE :{" "}
          <input type="radio" {...register("gender")} value="male"></input>
          <br></br>
          FEMALE :{" "}
          <input type="radio" {...register("gender")} value="female"></input>
        </div>
        <div>
          <label>HOBBIES</label>
          <br></br>
          READING :{" "}
          <input
            type="checkbox"
            {...register("hobbies")}
            value="reading"
          ></input>
          TRAVEL :{" "}
          <input
            type="checkbox"
            {...register("hobbies")}
            value="travel"
          ></input>
          FREE :{" "}
          <input type="checkbox" {...register("hobbies")} value="free"></input>
        </div>
        <div>
            <label>COLOR</label>
            <input type="color" {...register("color")}></input>
        </div>
        <div>
          <input type="submit"></input>
        </div>
      </form>
      <h1>OUTPUT</h1>
      {
        isSubbmited  && <div style={{color:userData.color}}>
        <li>name = {userData.name}</li>
        <li>age = {userData.age}</li>
      </div>
      }
      
    </div>
  );
};
