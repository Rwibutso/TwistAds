import { Box } from "@mui/material";
import HeaderMain from "./HeaderMain.jsx";


// import useWindowSize from "../../hooks/useWindowResize";

export default function Header() {
	// const sizes = useWindowSize();
	return (
		<Box
			sx={{
				position: "fixed",
				top: "0",
				bottom: "auto",
				left: "auto",
				right: "auto",
				background: "white",
				zIndex: "1300",
			}}
		>
			<HeaderMain />
		</Box>
	);
}

