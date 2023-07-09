import React, { useEffect, useState } from "react";
import "../Choose/choose.css";
import Image1 from "../../assets/img/feedback.jpg";
import { BsChevronLeft, BsChevronRight, BsCheck2All } from 'react-icons/bs';

import ScrollReveal from 'scrollreveal';


const Choose = () => {
    const [step, setStep] = useState(1);

    const handleNext = () => {
        setStep(step + 1);
    };

    const handlePrevious = () => {
        setStep(step - 1);
    };

    useEffect(() => {
        const sr = ScrollReveal({
          distance: '200px',
          duration: 2500,
          delay: 450,
          reset: true,
          mobile: true,
        });
        sr.reveal('.chooseTittle', {
          delay: 200,
          origin: 'top'
        });
        sr.reveal('.chooseBtn', {
            delay: 200,
            origin: 'bottom'
        });
        sr.reveal('.chooseFeedBack-main', {
          delay: 250,
          origin: 'right'
        });
        sr.reveal('.chooseLine1', {
            delay: 350,
            origin: 'left'
        });
        sr.reveal('.chooseLine2', {
            delay: 450,
            origin: 'left'
        });
        sr.reveal('.chooseLine3', {
            delay: 550,
            origin: 'left'
        });
        sr.reveal('.chooseLine4', {
            delay: 650,
            origin: 'left'
        });
        sr.reveal('.chooseLine5', {
            delay: 750,
            origin: 'left'
        });
        sr.reveal('.chooseLine6', {
            delay: 850,
            origin: 'left'
        });
    
      }, []);
	return (
        <div class="chooseContainer-main">
            <div className="chooseTittle-main">
              <h3>WHY BRANDS CHOOSE US</h3>
            </div>
            <div className="chooseDetails-main">
                <div className="chooseList">
                    <div className="chooseRight">
                        <div className="chooseLine1">
                            <BsCheck2All className="check1"/>
                            <h2 className="h2" >The #1 most memorable transit advertising</h2>
                        </div>
                        <div className="chooseLine2">
                            <BsCheck2All className="check2" />
                            <h2 className="h2" >Sleek & attractive ads</h2>
                        </div>
                        <div className="chooseLine3">
                            <BsCheck2All className="check3" />
                            <h2  className="h2" id="h3">Experiential with passengers</h2>
                        </div>
                        <div className="chooseLine4">
                            <BsCheck2All className="check4" />
                            <h2 className="h2" >Reaches all markets within EAC</h2>
                        </div>
                        <div className="chooseLine5">
                            <BsCheck2All className="check5" />
                            <h2 className="h2" >Digitally attributable ROI</h2>
                        </div>
                        <div className="chooseLine6">
                            <BsCheck2All className="check6" />
                            <h2 className="h2" >Quick and reliable</h2>
                        </div>
                    </div>
                </div>
                {step ===1 && (
                    <div className="chooseFeedBack-main">
                        <div className="choosefbckLeft-main">
                            <h3>Feedback</h3>
                            <img src={Image1} alt="feedback image"></img>
                            <div className="chooseNext-main">
                                <BsChevronLeft className="chooseLebel-main" id="choose-inactive-lft-main"/>
                                <div className="chooseText-main">
                                    <p><span>"</span>THIS COMPANY IS GREAT!<span>"</span></p>
                                    <h4>Serge</h4>
                                </div>
                                <BsChevronRight className="chooseLebel-main" onClick={handleNext}/>
                            </div>
                        </div>
                        <div className="choose-indicator-rght-main">
                            <div className="choose-indicator1-rght-main" id="choose-active-rght-main"></div>
                            <div className="choose-indicator1-rght-main"></div>
                            <div className="choose-indicator1-rght-main"></div>
                        </div>
                    </div>
                )}
                {step ===2 && (
                    <div className="chooseFeedBack-main">
                        <div className="choosefbckLeft-main">
                            <h3>Feedback</h3>
                            <img src={Image1} alt="feedback image"></img>
                            <div className="chooseNext-main">
                                <BsChevronLeft className="chooseLebel-main" onClick={handlePrevious}/>
                                <div className="chooseText-main">
                                    <p><span>"</span>THIS COMPANY IS GREAT!<span>"</span></p>
                                    <h4>Twist</h4>
                                </div>
                                <BsChevronRight className="chooseLebel-main" onClick={handleNext}/>
                            </div>
                        </div>
                        <div className="choose-indicator-rght-main">
                            <div className="choose-indicator1-rght-main" ></div>
                            <div className="choose-indicator1-rght-main" id="choose-active-rght-main"></div>
                            <div className="choose-indicator1-rght-main"></div>
                        </div>
                    </div>
                )}
                {step ===3 && (
                    <div className="chooseFeedBack-main">
                        <div className="choosefbckLeft-main">
                            <h3>Feedback</h3>
                            <img src={Image1} alt="feedback image"></img>
                            <div className="chooseNext-main">
                                <BsChevronLeft className="chooseLebel-main" onClick={handlePrevious}/>
                                <div className="chooseText-main">
                                    <p><span>"</span>THIS COMPANY IS GREAT!<span>"</span></p>
                                    <h4>Pascal</h4>
                                </div>
                                <BsChevronRight className="chooseLebel-main" id="choose-inactive-lft-main"/>
                            </div>
                        </div>
                        <div className="choose-indicator-rght-main">
                            <div className="choose-indicator1-rght-main" ></div>
                            <div className="choose-indicator1-rght-main"></div>
                            <div className="choose-indicator1-rght-main" id="choose-active-rght-main"></div>
                        </div>
                    </div>
                )}
            </div>
            <div className="chooseBtn">
                <button>See our work</button>
            </div>
        </div> 
	);
};
export default Choose;