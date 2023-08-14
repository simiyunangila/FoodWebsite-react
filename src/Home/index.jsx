import React, { useState } from "react";
import './style.css';
import Sandwich from '../../src/Images/sandwich.png'


const Homesection = () => {
    return (
        <>
        <div className="main">
          <div className="non_text">
            <h1>
              All Fast Food is available at Foodle
            </h1>
            
            <p>
                We are only one click away when you crave for delicious fast food
              
            </p>
            <button className="main_btn">
            Buy Now
            </button>
            <button className="main_bt">
             How to order
            </button>
          </div>
          <div className="main_image">
            <img src={Sandwich} alt="Delicious Food" />
          </div>
        </div>
        <div className="lower">
            <div>
                <h2>Fast Delivery</h2>
                <p>The Food will be delivered to your home <br/>within 1-2 hrs of your ordering</p>
            </div>

            <div>
                <h2> Fresh Food</h2>
                <p>The Food will be delivered 100% fresh to your<br/> home.We do not deliver Stale food.</p>
            </div>

            <div>
                <h2>Free Delivery</h2>
                <p>You food delivery is absolutely free <br/>.No cost just order and enjoy.</p>
            </div>
        </div>
        </>
      );
};

export default Homesection;
