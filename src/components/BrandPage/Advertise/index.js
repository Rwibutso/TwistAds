import React, { useEffect, useState } from "react";
import "../Advertise/advertise.css";
import Image1 from "../../../assets/img/feedback.jpg";
import { BsChevronLeft } from 'react-icons/bs';
import { BsChevronRight } from 'react-icons/bs';
import ScrollReveal from 'scrollreveal';


const Advertise = () => {
    const [step, setStep] = useState(1);
    const handleNext = () => {
        setStep(step + 1);
    };
    const handlePrevious = () => {
        setStep(step - 1);
    };

	return (
        <div class="adverContainer">
            <div className="adverTittle">
              <h3>ADVERTISE ON UBER, LYFT CARS</h3>
            </div>
            <div className="adverDetails">
                {step ===1 && (
                    <div className="adverFeedBack">
                        <div className="fbckLeft">
                            <img src={Image1} alt="feedback image"></img>
                            <div className="adverNext">
                                <BsChevronLeft className="adverLebel" id="inactive"/>
                                <div className="adverNextContent">
                                    <p><span>"</span>TistAds has been a TERRIFIC PARTNER. Their connected solutions
                                      EASILY TRACK PERFORMANCE and help maximize the use of our Ad Income.<span>"</span></p>
                                    <h4>Serge Rwibutso</h4>
                                    <h4 className="h4">Chief Marketing Officer, Visit Rwanda</h4>
                                </div>
                                <BsChevronRight className="adverLebel" onClick={handleNext}/>
                            </div>
                        </div>
                        <div className="indicator-adver">
                            <div className="indicator1-adver" id="active-adver"></div>
                            <div className="indicator1-adver"></div>
                            <div className="indicator1-adver"></div>
                        </div>
                    </div>
                )}
                {step ===2 && (
                    <div className="adverFeedBack">
                        <div className="fbckLeft">
                            <img src={Image1} alt="feedback image"></img>
                            <div className="adverNext">
                                <BsChevronLeft className="adverLebel" onClick={handlePrevious} />
                                <div className="adverNextContent">
                                    <p><span>"</span>TistAds has been a TERRIFIC PARTNER. Their connected solutions
                                      EASILY TRACK PERFORMANCE and help maximize the use of our Ad Income.<span>"</span></p>
                                    <h4>Andy Nyenimigabo</h4>
                                    <h4 className="h4">Founder of the company, TwistAds</h4>
                                </div>
                                <BsChevronRight className="adverLebel" onClick={handleNext}/>
                            </div>
                        </div>
                        <div className="indicator-adver">
                            <div className="indicator1-adver" ></div>
                            <div className="indicator1-adver" id="active-adver"></div>
                            <div className="indicator1-adver"></div>
                        </div>
                    </div>
                )}
                  {step ===3 && (
                    <div className="adverFeedBack">
                        <div className="fbckLeft">
                            <img src={Image1} alt="feedback image"></img>
                            <div className="adverNext">
                                <BsChevronLeft className="adverLebel" onClick={handlePrevious}/>
                                <div className="adverNextContent">
                                    <p><span>"</span>TistAds has been a TERRIFIC PARTNER. Their connected solutions
                                      EASILY TRACK PERFORMANCE and help maximize the use of our Ad Income.<span>"</span></p>
                                    <h4>Clement Pascal</h4>
                                    <h4 className="h4">Founder of the company, TwistAds</h4>
                                </div>
                                <BsChevronRight className="adverLebel" id="inactive" />
                            </div>
                        </div>
                        <div className="indicator-adver">
                            <div className="indicator1-adver" ></div>
                            <div className="indicator1-adver" ></div>
                            <div className="indicator1-adver"id="active-adver"></div>
                        </div>
                    </div>
                )}
            </div>

        </div> 
	);
};
export default Advertise;