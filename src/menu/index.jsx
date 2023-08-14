import React, { useState } from "react";
import './style.css';

import chicken from '../../src/Images/chicken burger.png'
import pizza from '../../src/Images/chips1.png'
import fries from '../../src/Images/chips2.png'

const Menu = () => {
    return (
        <div class="menu" id="Menu">
        <h1>Our <span>Regular</span>Menu</h1>
        <p>These are our regular menus you can <br/>order anything you like</p>
        <button>See all</button>
        <div class="menu_box">

            <div class="menu_card">
                <div class="menu_image">
                <img src={chicken} alt="Delicious Food" />
                </div>
                    <div class="menu_info">
                    <h2>Burger</h2>
                    
                    <h3>$20.00</h3>
                    <a href="#" class="menu_btn">Order Now</a>
                </div>
            </div>
            <div class="menu_card">
                <div class="menu_image">
                <img src={pizza} alt="Delicious Food" />
                </div>
                    <div class="menu_info">
                    <h2>Burger</h2>
                    
                    <h3>$20.00</h3>
                    <a href="#" class="menu_btn">Order Now</a>
                </div>
            </div>
            <div class="menu_card">
                <div class="menu_image">
                <img src={fries} alt="Delicious Food" />
                </div>
                    <div class="menu_info">
                    <h2>Burger</h2>
                    
                    <h3>$20.00</h3>
                    <a href="#" class="menu_btn">Order Now</a>
                </div>
            </div>
            <div class="menu_card">
                <div class="menu_image">
                <img src={chicken} alt="Delicious Food" />
                </div>
                    <div class="menu_info">
                    <h2>Burger</h2>
                    
                    <h3>$20.00</h3>
                    <a href="#" class="menu_btn">Order Now</a>
                </div>
            </div>
            <div class="menu_card">
                <div class="menu_image">
                <img src={chicken} alt="Delicious Food" />
                </div>
                    <div class="menu_info">
                    <h2>Burger</h2>
                    
                    <h3>$20.00</h3>
                    <a href="#" class="menu_btn">Order Now</a>
                </div>
            </div>
            <div class="menu_card">
                <div class="menu_image">
                <img src={chicken} alt="Delicious Food" />
                </div>
                    <div class="menu_info">
                    <h2>Burger</h2>
                    
                    <h3>$20.00</h3>
                    <a href="#" class="menu_btn">Order Now</a>
                </div>
            </div>
           
            
            
            
           
        </div>
    </div>
      
       
      );
};

export default Menu;   








