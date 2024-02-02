import React, { Component } from "react";
import { Link } from 'react-router-dom';
import "../../../assets/css/DriverCss/headerMainDriver.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { BsFacebook } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { BsYoutube } from 'react-icons/bs';
import { BsWhatsapp } from 'react-icons/bs';

class HeaderMain extends Component {
    state = {
        clicked: false
    };

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked });
    };

    render() {
        return (
            <div className="headerContainer">
                <div className="nav-logo">
                    <Link to="/" id="logoLink"><h3>Twist<span>Ads</span></h3></Link>
                </div>
                <div className="nav-right">
                    <div id="nav-right-link" className={this.state.clicked ? "#nav-right-link active" : "#nav-right-link"}>
                        <div className="nav-right-link-desc">
                            <Link to="/brands" id="link1"><h3>Brands & Agencies</h3></Link>
                            <span> | </span>
                            <Link to="/drivers" id="link2"><h3 className="active">Drivers</h3></Link>
                        </div>
                        <div className="media1">
                            <BsFacebook className="mediaIcon1" />
                            <BsLinkedin className="mediaIcon1" />
                            <BsTwitter className="mediaIcon1" />
                            <BsInstagram className="mediaIcon1" />
                            <BsYoutube className="mediaIcon1" />
                            <BsWhatsapp className="mediaIcon1" />
                        </div>
                    </div>
                    <div id="mobile">
                        <i id="bar" onClick={this.handleClick}>
                            {this.state.clicked ? <FaTimes /> : <FaBars />}
                        </i>
                    </div>
                </div>
            </div>
        );
    }
}

export default HeaderMain;
