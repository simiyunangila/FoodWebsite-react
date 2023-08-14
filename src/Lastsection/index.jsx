import React, { useState } from "react";
import './style.css';
import both from '../../src/Images/bigoffer.jpg'
import fri from '../../src/Images/fri.jpg'
import chi from '../../src/Images/chi.jpg'



const Last = () => {
    return (

    <div className="mages">
        <div className="one">
        <img src={both} alt="Delicious Food" /><br />
        </div>
        <div>
        <img src={fri} alt="Delicious Food" /><br />
        <img src={chi} alt="Delicious Food" /><br />
        </div>
    </div>
        
   

      );
};

export default Last;
