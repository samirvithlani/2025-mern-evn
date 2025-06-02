import axios from "axios";
import React, { useEffect, useState } from "react";
import { Loader } from "./Loader";
import { useFetchApi } from "../hooks/FetchApiHook";
import { toast, ToastContainer, Zoom } from "react-toastify";
import { Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

export const ApiDemo2 = () => {
  const [show, setshow] = useState(false);
  const [user, setuser] = useState({});
  
  const [modelLoader, setmodelLoader] = useState(false)
    
  const handleClose = () => setshow(false);

  const { res, loader, refetch } = useFetchApi(
    "https://node5.onrender.com/user/user"
  ); //[]
  const deleteUser = async (id) => {
    const res = await axios.delete(
      "https://node5.onrender.com/user/user/" + id
    );
    console.log(res);
    if (res.status == 204) {
      //alert("record deleted...")
      //getapi
      refetch();
      toast("record deleted....");
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
      <h1>API DEMO 1</h1>
      

      {loader && <Loader></Loader>}

      <table className="table table-dark">
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>AGE</th>
            <th>STATUS</th>

            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {res?.data?.data?.map((user) => {
            return (
              <tr>
                <td>{user._id}</td>
                <td>{user.name}</td>
                
                <td>{user.email}</td>
                <td>{user.age}</td>
                <td>{user.isActive == true ? "Active" : "NOt Active"}</td>
                <td>
                  <button
                    onClick={() => {
                      deleteUser(user._id);
                    }}
                    className="btn btn-danger"
                  >
                    DELETE
                  </button>
                  <button
                    onClick={() => {
                      userDetail(user._id);
                    }}
                    className="btn btn-info"
                  >
                    DETAIL
                  </button>
                  <Link to={`/updateuser/${user._id}`} className="btn btn-warning">UPDATE</Link>
                </td>
                
              </tr>
            );
          })}
        </tbody>
      </table>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>USER DETAIL</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {
                modelLoader && <h1>LOading....</h1>
            }
          Date fetched successfully!!
          <p>Name = {user.name}</p>
          <p>Email ={user.email}</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
