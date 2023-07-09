import React, { useRef } from 'react';
import '../Hero/hero.css';
import { BsArrowDownCircle } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const SlidingImageBackground = () => {
  const descRef = useRef(null);

  const handleScrollToDesc = () => {
    if (descRef.current) {
      window.scrollTo({
        top: descRef.current.offsetTop,
        behavior: 'smooth',
      });
    }
  };
 

  return (
    <div className="homeContainer">
      <div className="homeOuter">
        <div className="homeDesc">
          <h1> EAST AFRICAN'S LARGEST </h1>
          <h1> RIDESHARE ADVERTISING COMPANY </h1>
        </div>
        <div className="lctnB">
          <p>Middle_est. 2023</p>
        </div>
        <div className="next">
          <BsArrowDownCircle className="nextIcon" onClick={handleScrollToDesc} />
        </div>
      </div>
      <div ref={descRef} id="desc">
        {/* Content of the desc section */}
      </div>
    </div>
  );
};

export default SlidingImageBackground;
