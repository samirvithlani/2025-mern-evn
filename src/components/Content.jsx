import React from "react";

export default function Content() {
  var title = "React Js";
  var age = 25;
  var isActive = false;
  var user = {
    name: "Amit",
    age: 24,
  };

  return (
    <div>
      <h1>COTENT COMPONENT</h1>
      <h1>HELLO ALL</h1>
      <h2>Every tag must have closing tag in react js</h2>
      <h2>
        At a time we can return only 1 element and 1 element should return
      </h2>
      <h3>whatever has been written inside return will display on browser..</h3>
      {title}
      <h1>Title = {title}</h1>
      <h2>Age = {age}</h2>
      <h2>isActive ? {isActive == true ? "Active" : "Not Active"}</h2>
      <h1>NAME = {user.name}</h1>
      <h2>AGE = {user.age}</h2>
    </div>
  );
}
