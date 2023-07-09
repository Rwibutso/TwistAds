import React, { useEffect, useState } from "react";
import "../Paint/paint.css";
import { BsCheck2All } from "react-icons/bs";
import ScrollReveal from 'scrollreveal';


const Paint = () => {
    useEffect(() => {
        const sr = ScrollReveal({
          distance: '200px',
          duration: 2500,
          delay: 350,
          reset: true,
          mobile: true,
        });
        sr.reveal('.line1', {
            delay: 350,
            origin: 'left'
        });
        sr.reveal('.line2', {
            delay: 450,
            origin: 'left'
        });
        sr.reveal('.line3', {
            delay: 550,
            origin: 'left'
        });
    }, []);

  return (
    <div className="paintContainer-dr">
        <div className="paintSubcontainer-dr">
            <div className="paintDetails-dr">
                <div className="paintTittle-dr">
                    <h1>WRAPPING PROCESS</h1>
                </div>
                <div className="paintImg-dr">
                    <img decoding="async" data-src="https://carvertise.com/wp-content/uploads/2020/11/wrapping-animated.gif" 
                    src="https://carvertise.com/wp-content/uploads/2020/11/wrapping-animated.gif" 
                    alt="wrapping animated" class="gif-image"></img>
                </div>
                <div className="paintList-dr">
                    <div className="line1">
                        <BsCheck2All className="check" />
                        <h2>Decals are OEM Car Paint Safe</h2>
                    </div>
                    <div className="line2">
                        <BsCheck2All className="check" />
                        <h2>Installed & deinstalled by professionals</h2>
                    </div>
                    <div className="line3">
                        <BsCheck2All className="check" />
                        <h2>Conveniently wrapped nearby</h2>
                    </div>
                </div>
            </div>
            <h2 className="paintH2-dr">Don’t miss your next opportunity!</h2>
            <div className="paintBtn-dr">
                <button>Sign up today</button>
            </div>
        </div>
    </div>
  );
};

export default Paint;
