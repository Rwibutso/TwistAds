import React, { useRef, useEffect } from 'react';
import '../Hero/hero.css';
import { BsArrowDownCircle } from 'react-icons/bs';
import ScrollReveal from 'scrollreveal';

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
  useEffect(() => {
    const sr = ScrollReveal({
      distance: '100px',
      duration: 2500,
      delay: 450,
      reset: true,
      mobile: true,
    });
    sr.reveal('.homeBtn', {
      delay: 150,
      origin: 'left'
    });

  }, []);
 

  return (
    <div className="homeContainer">
      <div className="homeOuter">
        <div className="homeDesc">
          <h1> EARN PASSIVE INCOME </h1>
          <h1> DRIVING WITH TWISTADS </h1>
        </div>
        <div className="homeBtn">
          <button>Become a driver</button>
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
