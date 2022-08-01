import React from "react";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Homepage from "./Components/Homepage";
import Sell from "./Components/Sell";
import './App.css'
import { useEffect, useState, useCallback } from "react";
import Removecycle from "./Components/Removecycle";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
	const [login, setLogin] = useState({})

	useEffect(useCallback(() => {
		setLogin(JSON.parse(localStorage.getItem("CurrentUser")))
	}, [localStorage]), [])

	const updateUser = (login) => {
		localStorage.setItem("CurrentUser", JSON.stringify(login))
		setLogin(login)
	}

	// const test = "Heloo"
	// const name = username
	// const 
	return (
		<React.Fragment>
			<div className="App">
				<Router>
					<Routes>
						<Route path="/" element={<Login updateUser={updateUser} />} />
						<Route path="/register" element={<Register updateUser={updateUser} />} />
						<Route path="/homepage" element={login && login._id ? <Homepage login={login.username} updateUser={updateUser} /> : <Login setLogin={setLogin} />} />
						<Route path="/sell" element={<Sell login={login.username} updateUser={updateUser} />} />
						<Route path="/delete" element={<Removecycle login={login.username} updateUser={updateUser} />} />
					</Routes>
				</Router>
			</div>
		</React.Fragment>
	);
}

export default App;
