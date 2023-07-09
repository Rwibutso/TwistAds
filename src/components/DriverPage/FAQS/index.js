import React from 'react';
import "../FAQS/faqs.css";
import { Link } from 'react-router-dom';

const Easy = () => {
  return (
    <div className="FaqsContainer-dr">
      <h1>EASY TO JOIN, EFFORTLESS TO EARN</h1>
      <h4>Earn $450 – $1,500 per campaign</h4>
      <Link className='butoonLink-dr'>
            <button>Become a driver</button>
      </Link>
    </div>
  );
};

export default Easy;