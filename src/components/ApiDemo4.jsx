import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { toast, ToastContainer, Zoom } from "react-toastify";

export const ApiDemo4 = () => {
  const { register, handleSubmit } = useForm();
  const submitHandler = async (data) => {
    data.isActive = data.isActive == "true" ? true : false;
    console.log(data);
    const res = await axios.post("https://node5.onrender.com/user/user", data);
    if (res.status == 201) {
      //alert("user added..")
      toast.success("User added!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Zoom,
      });
    }
  };
  return (
    <div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Zoom}
      />
      <h1>API DEMO 4</h1>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div>
          <label>NAME</label>
          <input type="text" {...register("name")}></input>
        </div>
        <div>
          <label>AGE</label>
          <input type="text" {...register("age")}></input>
        </div>
        <div>
          <label>EMAIL</label>
          <input type="text" {...register("email")}></input>
        </div>
        <div>
          <label>STTAUS</label>
          <br></br>
          ACTIVE:
          <input type="radio" {...register("isActive")} value="true"></input>
          <br></br>
          NOT ACTIVE:{" "}
          <input type="radio" {...register("isActive")} value="false"></input>
        </div>
        <div>
          <input type="submit"></input>
        </div>
      </form>
    </div>
  );
};
