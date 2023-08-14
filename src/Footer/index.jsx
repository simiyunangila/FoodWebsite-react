import React, { useState } from "react";
import './style.css';



const Footer = () => {
    return (
         
            <div className="footer">
                <div>
                    <h1 className="hh">Fooodish</h1>
                    <p className="pp">Continue Fooodish 2023 all rights reserved</p>
                    <h1 className="hh">Follow Us On</h1>
                </div>
                <div>
               < h1 className="hh">Menu</h1>
                    <p className="pp">Home <br /><br /> Offers <br /><br /> Service <br /><br /> About Us</p>
                </div>
                <div>
                < h1 className="hh">Information</h1>
                    <p className="pp">
                        Menu <br /><br /> Quality <br /><br /> 
                        Make a choice <br /><br /> Salad with vegetable <br /><br /> Fast Delivery <br /><br /> Subcribe
                    </p>
                </div>
                <div>
                < h1 className="hh">Contact</h1>
                    <p className="pp">+123 456 789 <br /><br /> Explore <br /><br /> Info@Fooodish.com <br /><br /> 1245, New York ,USA</p>
                </div>
            </div>
    

      );
};

export default Footer;
