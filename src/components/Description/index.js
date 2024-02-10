import React, { useEffect } from 'react';
import "../Description/desc.css"
import descImage from "../../assets/json/descImage.json";
import Lottie from "lottie-react";
import ScrollReveal from 'scrollreveal';
import { Link } from 'react-router-dom';


const Desc = () => {
  useEffect(() => {
    const sr = ScrollReveal({
      distance: '350px',
      duration: 2500,
      delay: 550,
      reset: true,
      mobile: true,
    });
    sr.reveal('#happy', {
      delay: 350,
      origin: 'right'
    });
    sr.reveal('.Lottie', {
      delay: 450,
      origin: 'left'
    });

  }, []);
  return (
    <div className="descContainer">
      <div className='descOuter'>
        <div className='descDetails' id='happy'>
          <h1> MODERN OUTDORE ADVERTISING </h1>
          <p> The meteoric rise of Uber, Lyft, and DoorDash has 
            created a new class of vehicles that garner high 
            exposure in front of your target audience. Creative, 
            memorable, and technologically advanced, TwistAds is 
            redefining out-of-home. </p>
          <div className='descBtn'>
            <Link to="/brands" className='dbtn'><button>See how</button></Link>
          </div>
        </div>
        <div className='descImage'>
            <div className='Lottie'>
              <Lottie animationData={descImage} />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Desc;