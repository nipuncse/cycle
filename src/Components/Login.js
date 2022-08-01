import React, { useState } from 'react';
import '../css/login.css';
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
export default function Login(props) {
	let navigate = useNavigate();

	const [user, setUser] = useState({
		username: "",
		password: ""
	});

	const myState = e => {
		const { name, value } = e.target
		// console.log(`${name}, ${value}`)
		setUser({
			...user,
			[name]: value
		})
	}

	const validatUser = async () => {
		const res = await axios.post("https://cycleeapp.herokuapp.com", user)
		if (res.data.message === true) {
			props.updateUser(res.data.user)
			navigate('/homepage')
		}
		else {
			alert("wrong credentials ! Try again")
		}

	}

	return (
		<>

			<video autoPlay loop muted>
				<source
					src={process.env.PUBLIC_URL + "/videos/bg.mp4"}
					type="video/mp4"
				/>
				Your browser does not support the video tag.
			</video>
			<div className="contain" >
				<div className="form">
					<h2>SIGN IN</h2>
					<input type="text" id="username" value={user.username} onChange={myState} className="box" name="username" placeholder="Username" />
					<input type="password" id="password" value={user.password} onChange={myState} className="box" name="password" placeholder="Password" />
					<input type="submit" className="box" onClick={validatUser} id="sub" value="Log In" />
					<br />
					<p className="link">Don't Have an Account
						<br />
						<Link to="/register">Sign up</Link> here</p>
				</div>

				<div className="side">
					<img src={process.env.PUBLIC_URL + "/images/cycle.jpg"} alt="" />
				</div>
			</div>
		</>
	)
};
