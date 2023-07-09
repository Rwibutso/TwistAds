import React, { useEffect, useState } from "react";
import "../Join/join.css";
import ScrollReveal from 'scrollreveal';
import ImageLogoDr from "../../../assets/img/TransparentLogo.png";


const Join = () => {
    const [step, setStep] = useState(1);
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

    const handleNext = () => {
      setStep(step + 1);
    };
    const handlePrevious = () => {
        setStep(step - 1);
    };
    useEffect(() => {
        const sr = ScrollReveal({
          distance: '300px',
          duration: 2500,
          delay: 350,
          reset: true,
          mobile: true,
        });
        sr.reveal('.joinDetails-dr', {
          delay: 300,
          origin: 'bottom'
        });
    
    }, []);
	return (
        <div class="joinContainer-dr">
            <div className="joinDetails-dr">
                <div className="joinRegister-dr">
                    <div className="logoContainer-dr">
                        <img src={ImageLogoDr}></img>
                    </div>
                    <div className="fdbckLeft-dr">
                       {step ===1 && (
                        <div className="empty-dr">
                            <h2 className="h2-dr">Contact Information</h2>
                            <div className="indicator-dr">
                                <div className="indicator1-dr" id="active-dr"></div>
                                <div className="indicator1-dr"></div>
                            </div>
                            <div className="register2-dr">
                                <div className="register2-split-dr">
                                    <div className="form1-dr">
                                        <form>
                                            <input type="text" placeholder="First Name"></input>
                                            <input type="text" placeholder="Last Name"></input>
                                            <select className="selection-dr" value={selectedOption} onChange={handleChange}>
                                                {brands.map(brand => (
                                                    <option value={brand.value} >{brand.label}</option>
                                                ))}
                                            </select>
                                            <input type="text" placeholder="Model"></input>
                                            <select className="selection-dr" value={selectedOption} onChange={handleChange}>
                                                {years.map(year => (
                                                    <option value={year.value} >{year.label}</option>
                                                ))}
                                            </select>
                                        </form>
                                    </div>
                                    <div className="form2-dr">
                                        <form>
                                            <input type="email" placeholder="Primary Email"></input>
                                            <input type="text" placeholder="Primary Phone Number"></input> 
                                            <select className="selection-dr" value={selectedOption} onChange={handleChange}>
                                                {colors.map(color => (
                                                    <option value={color.value} >{color.label}</option>
                                                ))}
                                            </select> 
                                            <select className="selection-dr" value={selectedOption} onChange={handleChange}>
                                                {conditions.map(condition => (
                                                    <option value={condition.value} >{condition.label}</option>
                                                ))}
                                            </select>
                                            <select className="selection-dr" value={selectedOption} onChange={handleChange}>
                                                {hearUs.map(hear => (
                                                    <option value={hear.value} >{hear.label}</option>
                                                ))}
                                            </select>
                                        </form>
                                    </div>
                                </div>
                                <div className="form3-dr">
                                    <form>
                                        <input type="text" placeholder="Describe your driving route"></input> 
                                    </form>
                                </div>
                                <div className="joinBtn2-dr">
                                    <button onClick={handleNext}>Next</button>
                                </div>
                            </div>
                        </div>
                       )}
                        {step ===2 && (
                        <div className="empty-dr">
                            <h2 className="h2-dr">Contact Information</h2>
                            <div className="indicator-dr">
                                <div className="indicator1-dr"></div>
                                <div className="indicator1-dr" id="active-dr"></div>
                            </div>
                            <div className="register3-dr">
                                <div className="register3-split-dr">
                                        <div className="form1-dr">
                                            <form>
                                                <input type="text" placeholder="Home City*"></input>
                                                <input type="text" placeholder="Work City*"></input>
                                                <input type="text" placeholder="Average kilometres driven"></input> 
                                            </form>
                                        </div>
                                        <div className="form2-dr-step2">
                                            <form>
                                                <input type="text" placeholder="Average kilometres driven"></input> 
                                                <input type="text" placeholder="Are you a rideshare driver?"></input> 
                                            </form>
                                        </div>
                                    </div>
                                <div className="joinBtn3-dr">
                                    <button onClick={handlePrevious}>Back</button>
                                    <button >Submit</button>
                                </div>
                            </div>
                        </div>
                       )}
                    </div>
                </div>
                <div className="joinFeedBack-dr">
                    <h2>DRIVE YOUR MONTHLY INCOME WITH TWISTADS</h2>
                    <p>Since 2023, we have been helping thousands of 
                        drivers earn extra money each month for something
                        they already do. Drive!
                    </p>
                </div>
            </div>
        </div> 
	);
};
export default Join;