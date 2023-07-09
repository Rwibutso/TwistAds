import React, { useEffect } from 'react';
import "../Happy/happy.css";
import happyImage from "../../assets/json/happyImage.json";
import Lottie from "lottie-react";
import ScrollReveal from 'scrollreveal';

const Happy = () => {
  useEffect(() => {
    const sr = ScrollReveal({
      distance: '300px',
      duration: 2500,
      delay: 450,
      reset: true,
      mobile: true,
    });
    sr.reveal('.happyDetails', {
      delay: 250,
      origin: 'right'
    });
    sr.reveal('.drive', {
      delay: 250,
      origin: 'left'
    });

  }, []);

  return (
    <div className="happyContainer">
      <div className='happyOuter'>
        <div className='HappyImage'>
          <div className='drive'>
            <Lottie animationData={happyImage}/>
          </div>
        </div>
        <div className='happyDetails'>
          <h1> DRIVE MONTHLY INCOME </h1>
          <p>Join the thousands of drivers who are earning monthly income with us by placing an advertisement on your car.</p>
          <div className='happyBtn'>
            <button>Learn more</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Happy;
