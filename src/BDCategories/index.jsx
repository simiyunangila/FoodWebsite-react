import React, { useState } from "react";
import './style.css';

import chicken from '../../src/Images/chips1.png'
import pizza from '../../src/Images/pizza.png'
import fries from '../../src/Images/chips2.png'

const BDcategories = () => {
    return (
        <>
        <div className="part1">
<div className="heading">
    Best <span>Delivered</span><br/>Categories
</div>
<div className="par">
    Here are some of our best distributed categories.If you want you can order from this.
</div>
        </div>
        <div className="cate">
  <div className="food">
    <img src={chicken} alt="Delicious Food" />
    <label className="label">Plain Fries</label>
    <button className="button">Order Now</button>
  </div>
  <div className="food">
    <img src={pizza} alt="Delicious Food" />
    <label className="label">Chicken Pizza</label>
    <button className="button">Order Now</button>
  </div>
  <div className="food">
    <img src={fries} alt="Delicious Food" />
    <label className="label">French Fries</label>
    <button className="button">Order Now</button>
  </div>
</div>

        </>

      );
};

export default BDcategories;             
