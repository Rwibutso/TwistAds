import Header from "../components/BrandPage/Header/index";
import Hero from "../components/BrandPage/Hero/index.js";
import Brand from "../components/BrandPage/Brands/index.js";
import Advertise from "../components/BrandPage/Advertise/index.js";
import Study from "../components/BrandPage/Study/index.js";
import Display from "../components/HomeDisplay/index.js";
import Priority from "../components/BrandPage/Priority/index.js";
import Rate from "../components/BrandPage/Rate/index.js";
import Footer from "../../src/components/Footer/index.js";
import FAQS from "../components/BrandPage/FAQS/index.js";

export default function BrandPage() {

	return (
		<>
			<Header />
			<Hero />
		    <Brand />
            <Advertise />
			<Study />
			<Display />
			<Priority />
			<Rate/>
			{/* <FAQS /> */}
			<Footer />
		</>
	);
}
