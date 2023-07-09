import React, { useEffect } from 'react';
import "../Rate/rate.css"

const Rate = () => {
  return (
    <div className="rateContainer">
        <div className='rateDetails' id='happy'>
          <h3> Budget friendly pricing </h3>
          <p> Maximize your ad spend with a medium that will carry your message further</p>
          <div className='rateBtn'>
             <button>Get Rate</button>
          </div>
        </div>
    </div>
  );
};

export default Rate;