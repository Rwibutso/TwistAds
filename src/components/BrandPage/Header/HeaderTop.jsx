import React, { useEffect } from "react";
import "../../assets/css/headerTop.css";


export default function HeaderTop() {

	return (
        <div class="headerContainer">
            <div className="nav-logo">
                <h3>TwistAds</h3>
            </div>
            <div className="nav-right">
                <h3>Brands & Agencies </h3>
                <span> | </span>
                <h3>Drivers</h3>
            </div>
        </div> 
	);
}