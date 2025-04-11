import React from "react";
import { Link } from "react-router-dom";

export const TeamList = () => {
  return (
    <div>
      <h1>TEAM LIST..</h1>
      <ul>
        <li>
          <Link to="/teamdetail/101">CSK</Link>
        </li>
        <li>
          <Link to="/teamdetail/102">MI</Link>
        </li>
      </ul>
    </div>
  );
};
