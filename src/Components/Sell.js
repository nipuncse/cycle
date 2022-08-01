import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'
// import { useNavigate } from "react-router-dom";
export default function Sell(props) {
	// let navigate = useNavigate();
	const [newCycle, setnewCycle] = useState({
		userid: "",
		cname: "",
		ccname: "",
		oname: "",
		ocont: "",
		cprice: "",
		cdesc: "",
	})



	const settingC = async (e) => {
		const { name, value } = e.target
		setnewCycle({
			...newCycle,
			userid: props.login,
			[name]: value
		})

	}


	const addCycle = async () => {
		console.log('this is in')
		// await settingC()
		const res = await axios.post("https://cycleeapp.herokuapp.com/addnewcycle", newCycle)
		if (res.data.message === 1) {
			alert("Cycle is added succesfully")
		}
		else {
			alert("Cycle cannot be added");
		}

	}
	return (
		<>
			<Navbar user={props.login} logout={props.updateUser} />

			<form className="container bg-light my-5">
				<div className="form-group">
					<input type="text" className="form-control" id="userid" value={props.login} name="userid" readOnly />
					<br />
				</div>
				<div className="form-group">
					<input type="text" className="form-control" id="cname" name="cname" value={newCycle.cname} placeholder="Cycle Name" onChange={settingC} />
				</div>
				<br />
				<div className="form-group">
					<input type="text" className="form-control" id="ccname" name="ccname" value={newCycle.ccname} placeholder="Company Name" onChange={settingC} />
				</div>
				<br />
				<div className="form-group">
					<input type="text" className="form-control" id="oname" name="oname" placeholder="Owner Name" value={newCycle.oname} onChange={settingC} />
				</div>
				<br />
				<div className="form-group">
					<input type="text" className="form-control" id="ocont" name="ocont" placeholder="Contact Number" value={newCycle.ocont} onChange={settingC} />
				</div>
				<br />
				<div className="form-group">
					<input type="text" className="form-control" id="cprice" name="cprice" placeholder="Cycle Price" value={newCycle.cprice} onChange={settingC} />
				</div>
				<br />
				<div className="form-group">
					<input type="text" className="form-control" id="cdesc" name="cdesc" placeholder="Description" value={newCycle.cdesc} onChange={settingC} />
				</div>

				<br />
				<br />

				<button type="submit" onClick={addCycle} className="btn btn-primary">Submit</button>
			</form>
		</>
	)
}
