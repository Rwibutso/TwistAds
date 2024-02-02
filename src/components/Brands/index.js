import React from 'react';
import "../Brands/brand.css"

const Brand = () => {
  return (
    <div className="brandContainer">
      <span>Partners</span>
      <div className='brandOuter'>
        <div className='brandDetails1' id='brandDetails'>
          <h1 className='invisible'> Partner1 </h1>
          <h1 className='invisible'> Partner2 </h1>
          <h1 className='invisible'> Partner3 </h1>
          <h1 className='invisible'> Partner4 </h1>
          <h1 className='invisible'> Partner5 </h1>
          <h1> Partner6 </h1>
        </div>
        <div className='brandDetails2' id='brandDetails'>
          <h1 className='invisible'> Partner1 </h1>
          <h1 className='invisible'> Partner2 </h1>
          <h1 className='invisible'> Partner3 </h1>
          <h1 className='invisible'> Partner4 </h1>
          <h1 className='invisible'> Partner5 </h1>
          <h1> Partner6 </h1>
        </div>
        <div className='brandDetails3' id='brandDetails'>
          <h1> Partner1 </h1>
          <h1> Partner2 </h1>
          <h1> Partner3 </h1>
          <h1> Partner4 </h1>
          <h1 className='invisible'> Partner4 </h1>
          <h1 className='invisible'> Partner6 </h1>
        </div>
        
      </div>
    </div>
  );
};

export default Brand;