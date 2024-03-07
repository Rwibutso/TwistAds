import React, { Component } from "react";
import "../../../assets/css/headerMain.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { BsFacebook } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { BsYoutube } from 'react-icons/bs';
import { BsWhatsapp } from 'react-icons/bs';
import { Link } from "react-router-dom";

class HeaderMain extends Component {
    state = {
        clicked: false
    };

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked });
    };

    render() {
        return (
            <div className="headerHomeContainer">
                <div className="navHomeLogo">
                    <Link to="/" id="logoHomeLink"><h3>Twist<span>Ads</span></h3></Link>
                </div>
                <div className="navHomeRight">
                    <div id="navHomeRight-link" className={this.state.clicked ? "#nav-right-link active" : "#nav-right-link"}>
                        <div className="navHomeRight-link-desc">
                            <Link to="/brands" id="HomeLink1"><h3>Brands & Agencies</h3></Link>
                            <span> | </span>
                            <Link to="/drivers" id="HomeLink2"><h3 className="CurrentPage">Drivers</h3></Link>
                            <Link to="/login" id="HomeLink3"><h3>Login</h3></Link>
                        </div>
                        <div className="HomeMedia1">
                            <BsFacebook className="mediaIcon1" />
                            <BsLinkedin className="mediaIcon1" />
                            <BsTwitter className="mediaIcon1" />
                            <BsInstagram className="mediaIcon1" />
                            <BsYoutube className="mediaIcon1" />
                            <BsWhatsapp className="mediaIcon1" />
                        </div>
                    </div>
                    <div id="HomeMobile">
                        <i id="HomeBar" onClick={this.handleClick}>
                            {this.state.clicked ? <FaTimes /> : <FaBars />}
                        </i>
                    </div>
                </div>
            </div>
        );
    }
}

export default HeaderMain;
