import React, { useEffect, useState } from "react";
import "../Step/step.css";
import { Bs1Circle, Bs2Circle, Bs3Circle } from "react-icons/bs";
import image1 from "../../../assets/img/note.png";
import image2 from "../../../assets/img/ok.png";
import image3 from "../../../assets/img/earning.png";
import ScrollReveal from "scrollreveal";
import { BsChevronLeft } from 'react-icons/bs';
import { BsChevronRight } from 'react-icons/bs';

const Step = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 991);
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 911);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (!isMobile) {
      const sr = ScrollReveal({
        distance: "300px",
        duration: 2500,
        delay: 350,
        reset: true,
      });
      sr.reveal("#step1-dr", {
        delay: 300,
        origin: "bottom",
      });
      sr.reveal("#step2-dr", {
        delay: 600,
        origin: "bottom",
      });
      sr.reveal("#step3-dr", {
        delay: 900,
        origin: "bottom",
      });
    }
  }, [isMobile]);

  const handleNextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handlePreviousStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  return (
    <div className="stepContainer-dr" id="stepContainer-dr-id">
      <div className="stepDetails-dr">
        <div className="tittle-dr">
          <h1>HOW IT WORKS</h1>
        </div>
        <div className="steps-dr">
          {currentStep === 0 && (
            <div className="leftDiv-dr">
              <BsChevronLeft className="labelIcon1-dr" id="labelInactive-dr" />
              <div className="step1-dr" id="step1-dr">
                <Bs1Circle className="label-dr" />
                <img src={image1} alt="Step 1" />
                <h3>DRIVER APPLICATION</h3>
                <p>We ask some simple questions about where you normally drive</p>
                <div className="indicator-step-dr">
                  <div className="indicator1-step-dr" id="active-dr"></div>
                  <div className="indicator1-step-dr" ></div>
                  <div className="indicator1-step-dr"></div>
                </div>
              </div>
              <div className="stepSub1-dr" id="step2-dr">
                <Bs2Circle className="label-dr" />
                <img src={image2} alt="Step 2" />
                <h3>MATCH</h3>
                <p>We then match you to a brand that likes your driving habits</p>
              </div>
              <div className="stepSub2-dr" id="step3-dr">
                <Bs3Circle className="label-dr" />
                <img src={image3} alt="Step 3" />
                <h3>DRIVER & EARN</h3>
                <p>We wrap your car and then pay you every month through direct deposit</p>
              </div>
              <BsChevronRight onClick={handleNextStep} className="labelIcon1-dr" />
            </div>
          )}
          {currentStep === 1 && (
            <div className="middleDiv-dr">
              <BsChevronLeft onClick={handlePreviousStep} className="labelIcon1-dr" />
              <div className="step2-dr" id="step2-dr">
                <Bs2Circle className="label-dr" />
                <img src={image2} alt="Step 2" />
                <h3>MATCH</h3>
                <p>We then match you to a brand that likes your driving habits</p>
                <div className="indicator-step-dr">
                  <div className="indicator1-step-dr" ></div>
                  <div className="indicator1-step-dr" id="active-dr"></div>
                  <div className="indicator1-step-dr" ></div>
                </div>
              </div>
              <BsChevronRight onClick={handleNextStep} className="labelIcon1-dr" />
            </div>
          )}
          {currentStep === 2 && (
            <div className="rightDiv-dr">
              <BsChevronLeft onClick={handlePreviousStep} className="labelIcon1-dr" />
              <div className="step3-dr" id="step3-dr">
                <Bs3Circle className="label-dr" />
                <img src={image3} alt="Step 3" />
                <h3>DRIVER & EARN</h3>
                <p>We wrap your car and then pay you every month through direct deposit</p>
                <div className="indicator-step-dr">
                  <div className="indicator1-step-dr" ></div>
                  <div className="indicator1-step-dr" ></div>
                  <div className="indicator1-step-dr" id="active-dr"></div>
                </div>
              </div>
              <BsChevronRight className="labelIcon1-dr" id="labelInactive-dr" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Step;
