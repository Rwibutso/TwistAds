import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import React from 'react';
import Routes from "./routes/index.jsx";

const App = () => {
	return (
		<Router>
			<Routes></Routes>
		</Router>
	);
};
export default App;