import Header from "../components/DriverPage/Header/index";
import Hero from "../components/DriverPage/Hero/index.js";
import Brand from "../components/DriverPage/Brands/index.js";
import Join from "../components/DriverPage/Join/index.js";
import Anounce from "../components/DriverPage/Anounce/index.js";
import Footer from "../components/DriverPage/Footer/index.js";
import Step from "../components/DriverPage/Step/index.js";
import Display from "../components/HomeDisplay/index.js";
import Easy from "../components/DriverPage/Easy/index.js";
import Paint from "../components/DriverPage/Paint/index.js";
import FAQS from "../components/DriverPage/FAQS/index.js";

export default function DriverPage() {

	return (
		<>
			<Header />
			<Hero />
			<Brand />
            <Join />
			<Anounce />
			<Step />
			<Display />
			<Paint />
			<Easy />
			{/* <FAQS /> */}
			<Footer />
		</>
	);
}
