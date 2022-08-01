import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card2 from './Card2'
import Navbar from './Navbar'
export default function Removecycle(props) {
	const [newData, setnewData] = useState([]);
	// const [user, setUser] = useState({
	// 	id: ""
	// });

	// async function mywait() {
	// 	setUser({
	// 		id: props.login
	// 	})
	// }
	const style = {
		color: "white",
		fontSize: "50px",
		fontFamily: "lucida console",
		textAlign: "center",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		height: "100vh",
		width: "100vw"
	}
	useEffect(() => {
		// const user = { id: props.login }
		async function getResults() {
			console.log(props.login);
			const res = await axios.post("https://cycleeapp.herokuapp.com/getcycles2", {
				id: props.login
			});
			setnewData(res.data.details);
			console.log(res.data.details.length);
			console.log(res.data.details);
		}
		async function hello() {
			// const stay = await mywait()
			getResults();

		}
		hello();

	}, [props.login])
	return (
		<>
			<Navbar user={props.login} logout={props.updateUser} />

			{newData.length !== 0 && <div className="container mx-auto my-5">
				<div className="row">
					{newData.map((element) => {
						return (
							<Card2 login={props.login} setnewData={setnewData} cycle_name={element.cycle_name} cycle_company={element.cycle_company} cycle_price={element.cycle_price} id={element._id} />
						)
					})};

				</div>
			</div>
			}
			{newData.length === 0 && <div style={style}>No Cycles Found : 404</div>}
		</>
	)
}
