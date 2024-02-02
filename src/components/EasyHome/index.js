import React, { useRef } from 'react';
import "../EasyHome/easyHome.css";
import { Link } from 'react-router-dom';

const EasyHome = () => {

  const elmRef = useRef();

  const scrollHandler = () => {
    const joinElement = document.getElementById("joinRegister-dr-id");
    if (joinElement) {
      window.scrollTo({
        top: joinElement.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="EasyHomeContainer-dr">
      <h1>EASY TO JOIN, EFFORTLESS TO EARN</h1>
      <h4>Earn $450 – $1,500 per campaign</h4>
      <div className='butoonLink-dr'>
        <button onClick={scrollHandler}>Join now</button>
      </div>
    </div>
  );
};

export default EasyHome;


