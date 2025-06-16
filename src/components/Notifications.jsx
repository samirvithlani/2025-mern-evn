import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addNotification } from "../redux/NotificationSlice";

export const Notifications = () => {
  const { register, handleSubmit } = useForm();

  const dispatch = useDispatch()

  const submitHandler = (data) => {
    console.log(data);
    //dispatch(addNotification(action{payload}))
    dispatch(addNotification(data))
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h1>NOTIFICATIOS</h1>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div>
          <label>MESSGAE</label>
          <input type="text" {...register("text")}></input>
        </div>
        <div>
            <label>CAT</label>
            <input type="text" {...register("cat")}></input>
        </div>
        <div>
            <input type="submit" value="submit"></input>
        </div>
      </form>
    </div>
  );
};
