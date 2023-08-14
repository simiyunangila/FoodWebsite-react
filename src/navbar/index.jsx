import React, { useState } from "react";
import './style.css';


const NavigationBar = () => {
    return (
    <div className="Navbar">
      <nav className="nav">
        <div>
          <h1 className="logo">
            Foodle
          </h1>
        </div>
        <div className="links">
          <li><a href="">Home</a></li>
          <li> <a href="">offer</a> </li>
          <li> <a href="">service</a> </li>
          <li> <a href="">Menu</a> </li>
          <li> <a href="">About us</a> </li>
          <li> <a href="">Login</a> </li>
          <button>Sign Up</button>
        </div>
      </nav>  
    </div>
  );
};
export default NavigationBar;
