import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../views/HomePage.jsx";
import DriverPage from "../views/DriverPage.jsx";
import BrandPage from "../views/BrandPage.jsx";
import LoginPage from "../views/login/LoginPage.jsx";

const index = () => {

	return (
		<Routes>
			<Route exact path="/" element={<HomePage />} />
			<Route exact path="/drivers" element={<DriverPage />} />
			<Route exact path="/brands" element={<BrandPage />} />
			<Route exact path="/login" element={<LoginPage />} />

		</Routes>
	);
};

export default index;
