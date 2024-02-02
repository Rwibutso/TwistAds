import React, { useRef } from 'react';
import "../Easy/easy.css";
import { Link } from 'react-router-dom';

const Easy = () => {

  const elmRef = useRef();

  const scrollHandler = () => {
    const joinElement = document.getElementById('fdbckLeft-dr-id');
    if (joinElement) {
      window.scrollTo({
        top: joinElement.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="EasyContainer-dr">
      <h1>EASY TO JOIN, EFFORTLESS TO EARN</h1>
      <h4>Earn $450 – $1,500 per campaign</h4>
      <div className='butoonLink-dr'>
        <button onClick={scrollHandler}>Become a driver</button>
      </div>
    </div>
  );
};

export default Easy;


