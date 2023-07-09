import React from 'react';
import "../Easy/easy.css";
import { Link } from 'react-router-dom';

const Easy = () => {
  return (
    <div className="EasyContainer-dr">
      <h1>EASY TO JOIN, EFFORTLESS TO EARN</h1>
      <h4>Earn $450 – $1,500 per campaign</h4>
      <Link to="/drivers" className='butoonLink-dr'><button>Become a driver</button></Link>
    </div>
  );
};

export default Easy;