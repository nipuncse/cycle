import React from 'react'
import { useNavigate } from "react-router-dom";

import axios from 'axios'
export default function Card2(props) {
	let navigate = useNavigate();
	const deleteCycle = async (e) => {
		const res = await axios.post("https://cycleeapp.herokuapp.com/delcycle", {
			address: e.target.id
		});
		const res2 = await axios.post("https://cycleeapp.herokuapp.com/getcycles2", {
			id: props.login
		});
		props.setnewData(res2.data.details)
		navigate('/delete')
	}
	return (
		<>
			<div className="card col-4 mx-3 my-3" style={{ width: "18rem" }}>
				<img src="https://picsum.photos/200/300/?blur" style={{ height: "150px" }} className="card-img-top" alt="..." />
				<div className="card-body">
					<h5 className="card-title">{props.cycle_name}</h5>
					<p className="card-text">Company: {props.cycle_company}</p>
					<p className="card-text">Price: Rs {props.cycle_price}</p>
					<button type="button" id={props.id} onClick={deleteCycle} class="btn btn-warning">Delete</button>
				</div>
			</div>
		</>
	)
}