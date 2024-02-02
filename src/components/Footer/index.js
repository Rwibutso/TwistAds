import React, { useState } from "react";
import "../Footer/footer.css";
import logoImage from "../../assets/img/TransparentLogo.png";
import { BsFacebook } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { BsYoutube } from 'react-icons/bs';
import { BsWhatsapp } from 'react-icons/bs';


const Footer = () => {

    return (
        <div class="footerContainer">
            <div className="media">
                <BsFacebook className="mediaIcon" />
                <BsLinkedin className="mediaIcon" />
                <BsTwitter className="mediaIcon" />
                <BsInstagram className="mediaIcon" />
                <BsYoutube className="mediaIcon" />
                <BsWhatsapp className="mediaIcon" />
            </div>
            <div className="content">
                <div className="content-list">
                    <ul>
                        <li><a href="#">Drivers</a></li>
                        <li><a href="#">Brands & Agencies</a></li>
                        <li><a href="#">Industries</a></li>
                        <li><a href="#">Add-ons</a></li>
                        <li><a href="#">Join Our Team</a></li>
                        <li><a href="#">Careers</a></li>
                    </ul>
                </div>
                <div className="arrangment">
                    <div className="content-logo">
                        <div className="logo-container">
                            <a href="#"><img src={logoImage}></img></a>
                        </div>
                        <div className="content-logo-h3">
                            <a href="#" ><h3>Privacy Policy</h3></a>
                        </div>
                        <h4>All right reserved by TwistAds team | 2023</h4>
                    </div>
                    <div className="content-help">
                        <ul>
                            <li><a href="#">Need Help</a></li>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Terms of use</a></li>
                            <li><a href="#">Feedback</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Footer;