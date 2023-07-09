import React, { useEffect } from 'react';
import "../Priority/priority.css";
import { BsCheck2All } from 'react-icons/bs';

const Study = () => {
  return (
    <div className="priorityContainer">
        <div className='priorityDetails' id='happy'>
          <p className='p'>OUR #1 PRIORITY: <span>BRAND SAFETY</span></p>
          <p> To ensure your brand is safe on the streets, we select the top drivers to represent your name on the road </p>
          <div className='priorityDivision'>
            <div className='prioDiv'>
              <BsCheck2All className='priorityCheck'></BsCheck2All>
              <h4>Professional Vetted</h4>
            </div>
            <div className='prioDiv'>
              <BsCheck2All className='priorityCheck'></BsCheck2All>
              <h4>GPS Tracked</h4>
            </div>
            <div className='prioDiv'>
              <BsCheck2All className='priorityCheck'></BsCheck2All>
              <h4>Top Rated Rideshare Drivers</h4>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Study;