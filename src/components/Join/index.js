import React, { useEffect, useState } from "react";
import "../Join/join.css";
import Image1 from "../../assets/img/feedback.jpg";
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import ScrollReveal from 'scrollreveal';


const Join = () => {
    const [step1, setStep1] = useState(1);
    const [step2, setStep2] = useState(1);
    const [selectedOption, setSelectedOption] = useState('');

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    };
    const brands = [
        {label: "Choose brand*"},
        {label: "Bmw", value: 1},
        {label: "Toyota", value: 2},
        {label: "Hyundai", value: 3},
        {label: "Tesla", value: 4},
        {label: "Audi", value: 5},
        {label: "Jeep", value: 6},
        {label: "Ford", value: 7},
        {label: "Kia", value: 8},
        {label: "Nissan", value: 9},
        {label: "Mercedes-benz", value: 10},
        {label: "Lexus", value: 11},
        {label: "Volkswagen", value: 12},
        {label: "Volvo", value: 13},
        {label: "Chevrolet", value: 14},
        {label: "Lincolin", value: 15},
    ];
    const colors = [
        {label: "Choose color*"},
        {label: "Yellow/Gold", value: 1},
        {label: "Green", value: 2},
        {label: "Red", value: 3},
        {label: "Blue", value: 4},
        {label: "White", value: 5},
        {label: "Black", value: 6},
        {label: "Silver/Grey", value: 7},
        {label: "Brown/Beige", value: 8},
        {label: "Other", value: 9},
    ];
    const years = [
        {label: "Choose year*"},
        {label: "2023", value: 1},
        {label: "2022", value: 2},
        {label: "2021", value: 3},
        {label: "2020", value: 4},
        {label: "2019", value: 5},
        {label: "2018", value: 6},
        {label: "2017", value: 7},
        {label: "2016", value: 8},
        {label: "2015", value: 9},
        {label: "2014", value: 10},
        {label: "2013", value: 11},
        {label: "2012", value: 12},
        {label: "2011", value: 13},
        {label: "2010", value: 14},
        {label: "2009", value: 15},
        {label: "2008", value: 16},
        {label: "2007", value: 17},
        {label: "2006", value: 18},
        {label: "2005", value: 19},
        {label: "2004", value: 20},
        {label: "2003", value: 21},
        {label: "2002", value: 22},
        {label: "2001", value: 23},
        {label: "2000", value: 24},
    ];
    const conditions = [
        {label: "Choose condition*"},
        {label: "Excellent", value: 1},
        {label: "Good", value: 2},
        {label: "Average", value: 3},
        {label: "Rough", value: 4},
        {label: "Demaged", value: 5}
    ];
    const hearUs = [
        {label: "How did you hear about us*"},
        {label: "Google Serach", value: 1},
        {label: "Google Ad", value: 2},
        {label: "Facebook Page", value: 3},
        {label: "Facebook ad", value: 4},
        {label: "Instagram", value: 5},
        {label: "Youtube", value: 6},
        {label: "Snapchat", value: 7},
        {label: "Other", value: 8},
    ];

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
        console.log('Selected option:', selectedOption);
    };

    const handleNext1 = () => {
      setStep1(step1 + 1);
    };
    const handleNext2 = () => {
        setStep2(step2 + 1);
      };
    const handlePrevious1 = () => {
        setStep1(step1 - 1);
    };
    const handlePrevious2 = () => {
        setStep2(step2 - 1);
    };
    useEffect(() => {
        const sr = ScrollReveal({
          distance: '100px',
          duration: 2500,
          delay: 450,
          reset: true,
          mobile: true,
        });
        sr.reveal('.joinTittle-main', {
          delay: 200,
          origin: 'top'
        });
        sr.reveal('.joinFeedBack-main', {
          delay: 250,
          origin: 'left'
        });
        sr.reveal('.joinRegister-main', {
            delay: 350,
            origin: 'right'
        });
    
    }, []);
	return (
        <div class="joinContainer-main">
            <div className="joinTittle-main">
              <h3>JOIN US</h3>
            </div>
            <div className="joinDetails-main">
                {step1 ===1 && (
                    <div className="joinFeedBack-main">
                        <div className="fbckLeft-main">
                            <h3>Feedback</h3>
                            <img src={Image1} alt="feedback image"></img>
                            <div className="joinNext-main">
                                <BsChevronLeft className="joinLebel-main" id="inactive-lft-main"/>
                                <div className="joinText-main">
                                    <p><span>"</span>THIS COMPANY IS GREAT!<span>"</span></p>
                                    <h4>Serge</h4>
                                </div>
                                <BsChevronRight className="joinLebel-main" onClick={handleNext1}/>
                            </div>
                        </div>
                        <div className="indicator-lft-main">
                            <div className="indicator1-lft-main" id="active-lft-main"></div>
                            <div className="indicator1-lft-main"></div>
                            <div className="indicator1-lft-main"></div>
                            <div className="indicator1-lft-main"></div>
                        </div>
                    </div>
                )}
                {step1 ===2 && (
                    <div className="joinFeedBack-main">
                        <div className="fbckLeft-main">
                            <h3>Feedback</h3>
                            <img src={Image1} alt="feedback image"></img>
                            <div className="joinNext-main">
                                <BsChevronLeft className="joinLebel-main" onClick={handlePrevious1}/>
                                <div className="joinText-main">
                                    <p><span>"</span>THIS COMPANY IS GREAT!<span>"</span></p>
                                    <h4>Twist</h4>
                                </div>
                                <BsChevronRight className="joinLebel-main" onClick={handleNext1}/>
                            </div>
                        </div>
                        <div className="indicator-lft-main">
                            <div className="indicator1-lft-main" ></div>
                            <div className="indicator1-lft-main" id="active-lft-main"></div>
                            <div className="indicator1-lft-main"></div>
                            <div className="indicator1-lft-main"></div>
                        </div>
                    </div>
                )}
                {step1 ===3 && (
                    <div className="joinFeedBack-main">
                        <div className="fbckLeft-main">
                            <h3>Feedback</h3>
                            <img src={Image1} alt="feedback image"></img>
                            <div className="joinNext-main">
                                <BsChevronLeft className="joinLebel-main" onClick={handlePrevious1}/>
                                <div className="joinText-main">
                                    <p><span>"</span>THIS COMPANY IS GREAT!<span>"</span></p>
                                    <h4>Pascal</h4>
                                </div>
                                <BsChevronRight className="joinLebel-main" onClick={handleNext1}/>
                            </div>
                        </div>
                        <div className="indicator-lft-main">
                            <div className="indicator1-lft-main" ></div>
                            <div className="indicator1-lft-main"></div>
                            <div className="indicator1-lft-main" id="active-lft-main"></div>
                            <div className="indicator1-lft-main"></div>
                        </div>
                    </div>
                )}
                {step1 ===4 && (
                    <div className="joinFeedBack-main">
                        <div className="fbckLeft-main">
                            <h3>Feedback</h3>
                            <img src={Image1} alt="feedback image"></img>
                            <div className="joinNext-main">
                                <BsChevronLeft className="joinLebel-main" onClick={handlePrevious1}/>
                                <div className="joinText-main">
                                    <p><span>"</span>THIS COMPANY IS GREAT!<span>"</span></p>
                                    <h4>Kimenyi</h4>
                                </div>
                                <BsChevronRight className="joinLebel-main" id="inactive-lft-main"/>
                            </div>
                        </div>
                        <div className="indicator-lft-main">
                            <div className="indicator1-lft-main" ></div>
                            <div className="indicator1-lft-main"></div>
                            <div className="indicator1-lft-main" ></div>
                            <div className="indicator1-lft-main" id="active-lft-main"></div>
                        </div>
                    </div>
                )}
                <div className="joinRegister-main">
                    <div className="fdbckRight-main">
                       {step2 ===1 && (
                        <div className="empty-main">
                            <div className="tittle-main">
                                <h2>EARN $450 - $1500</h2> 
                                <h4>each campaign</h4> 
                            </div>
                            <h2 className="h2-main">Become a driver in just 3 easy steps</h2>
                            <div className="indicator-main">
                                <div className="indicator1-main" id="active-main"></div>
                                <div className="indicator1-main"></div>
                                <div className="indicator1-main"></div>
                            </div>
                            <div className="register-main">
                                <form>
                                    <input type="text" placeholder="First Name"></input>
                                    <input type="text" placeholder="Last Name"></input>
                                    <input type="email" placeholder="Primary Email"></input>
                                    <input type="text" placeholder="Primary Phone Number"></input> 
                                </form>
                                <div className="joinBtn-main">
                                  <button onClick={handleNext2}>Next</button>
                                </div>
                            </div>
                        </div>
                       )}
                       {step2 ===2 && (
                        <div className="empty-main">
                            <div className="tittle-main">
                                <h2>EARN $450 - $1500</h2> 
                                <h4>each campaign</h4> 
                            </div>
                            <h2 className="h2-main">Become a driver in just 3 easy steps</h2>
                            <div className="indicator-main">
                                <div className="indicator1-main"></div>
                                <div className="indicator1-main" id="active-main"></div>
                                <div className="indicator1-main"></div>
                            </div>
                            <div className="register2-main">
                                <div className="register2-split-main">
                                    <div className="form1-main">
                                        <form>
                                            <select className="selection-main" value={selectedOption} onChange={handleChange}>
                                                {brands.map(brand => (
                                                    <option value={brand.value} >{brand.label}</option>
                                                ))}
                                            </select>
                                            <input type="text" placeholder="Model"></input>
                                            <select className="selection-main" value={selectedOption} onChange={handleChange}>
                                                {years.map(year => (
                                                    <option value={year.value} >{year.label}</option>
                                                ))}
                                            </select>
                                        </form>
                                    </div>
                                    <div className="form2-main">
                                        <form>
                                            <select className="selection-main" value={selectedOption} onChange={handleChange}>
                                                {colors.map(color => (
                                                    <option value={color.value} >{color.label}</option>
                                                ))}
                                            </select> 
                                            <select className="selection-main" value={selectedOption} onChange={handleChange}>
                                                {conditions.map(condition => (
                                                    <option value={condition.value} >{condition.label}</option>
                                                ))}
                                            </select>
                                            <select className="selection-main" value={selectedOption} onChange={handleChange}>
                                                {hearUs.map(hear => (
                                                    <option value={hear.value} >{hear.label}</option>
                                                ))}
                                            </select>
                                        </form>
                                    </div>
                                </div>
                                <div className="form3-main">
                                    <form>
                                        <input type="text" placeholder="Describe your driving route"></input> 
                                    </form>
                                </div>
                                <div className="joinBtn2-main">
                                    <button onClick={handlePrevious2}>Back</button>
                                    <button onClick={handleNext2}>Next</button>
                                </div>
                            </div>
                        </div>
                       )}
                        {step2 ===3 && (
                        <div className="empty-main">
                            <div className="tittle-main">
                                <h2>EARN $450 - $1500</h2> 
                                <h4>each campaign</h4> 
                            </div>
                            <h2 className="h2-main">Become a driver in just 3 easy steps</h2>
                            <div className="indicator-main">
                                <div className="indicator1-main"></div>
                                <div className="indicator1-main"></div>
                                <div className="indicator1-main" id="active-main"></div>
                            </div>
                            <div className="register3-main">
                                <div className="register3-split-main">
                                        <div className="form1-main">
                                            <form>
                                                <input type="text" placeholder="Home City*"></input>
                                                <input type="text" placeholder="Work City*"></input>
                                                <input type="text" placeholder="Average kilometres driven"></input> 
                                            </form>
                                        </div>
                                        <div className="form2-main">
                                            <form>
                                                <input type="text" placeholder="Average kilometres driven"></input> 
                                                <input type="text" placeholder="Are you a rideshare driver?"></input> 
                                                <input type="text" placeholder="Anything wish to add?"></input> 
                                            </form>
                                        </div>
                                    </div>
                                <div className="joinBtn3-main">
                                    <button onClick={handlePrevious2}>Back</button>
                                    <button >Submit</button>
                                </div>
                            </div>
                        </div>
                       )}
                    </div>
                </div>
            </div>
        </div> 
	);
};
export default Join;