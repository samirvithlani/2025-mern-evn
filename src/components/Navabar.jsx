import React from "react";
import { Link } from "react-router-dom";

export const Navabar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">
          Navbar
        </a>
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
          </ul>
        </div>
      </nav>
    </div>
  );
};
