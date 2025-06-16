import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../ThemeContext";
import { useSelector } from "react-redux";

export const Navabar = () => {
  const {isDark,lightTheme,darkTheme,setisDark} = useContext(ThemeContext)
  console.log("is dark...",isDark)

  // const state = useSelector((state)=>state)
  // console.log("state",state) //store...

  //state.reducerName.initalState
  const cartState  = useSelector((state)=>state.cart.cart)
  const bankState = useSelector((state)=>state.bank.balance)
  const notificationState = useSelector((state)=>state.notification.notifications)
  //array....

  return (
    <div style={isDark ? darkTheme : lightTheme}>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">
          Navbar
        </a>
        <button onClick={()=>{setisDark(!isDark)}} className="btn btn-primary">
          {
            isDark ? "Light Mode" : "Dark Mode"
          }
        </button>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Home <span class="sr-only">(current)</span>
              </a>
            </li>
            {/* <li class="nav-item">
              <Link class="nav-link" to="/teams">
                TEAMS
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/players">
                PLAYERS
              </Link>
            </li>
            
            <li class="nav-item">
              <Link class="nav-link" to="/usememo">
              usememo
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/findbomb">
              findbomb
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/formdemo1">
              FORM DEMO 1
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/formdemo2">
              FORM DEMO 2
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/formdemo3">
              FORM DEMO 3
              </Link>
            </li>

            <li class="nav-item">
              <Link class="nav-link" to="/formdemo4">
              FORM DEMO 4
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/formdemo5">
              FORM DEMO 5
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/useeffectdemo">
              USE EFFECT DEMO
              </Link>
            </li> */}
            <li class="nav-item">
              <Link class="nav-link" to="/apidemo1">
              api demo 1
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/apidemo3">
              api demo 3
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/apidemob1">
              api demo b1
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/products">
              PRODUCTS
              </Link>
            </li>
            
            <li class="nav-item">
              <Link class="nav-link" to="/addproducts">
              addproducts
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/compnay">
              COMPNAY
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/product">
              PRODUCTS
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/bank">
              BANK
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/notifications">
              NOTIFICATIONS
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/notificationList">
              NOTIFICATIONS LIST
              </Link>
            </li>

            <li class="nav-item">
              <h4 style={{color:"blue"}}>{cartState.length}</h4>
              </li>
              <li class="nav-item">
              <h4 style={{color:"red"}}>{bankState}</h4>
              </li>
              <li class="nav-item">
              <h4 style={{color:"yellow" ,margin:10}}>{notificationState.length}</h4>
              </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
