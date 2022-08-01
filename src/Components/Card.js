import React from 'react'

export default function Card(props) {
	return (
		<>
			<div className="card col-4 mx-3 my-3" style={{ width: "18rem" }}>
				<img src="https://picsum.photos/200/300/?blur" style={{ height: "150px" }} className="card-img-top" alt="..." />
				<div className="card-body">
					<h5 className="card-title">{props.cycle_name}</h5>
					<p className="card-text">Company: {props.cycle_company}</p>
					<p className="card-text">Owner: {props.owner_name}</p>
					<p className="card-text">Price: Rs {props.cycle_price}</p>
					<p className="card-text">Contact: {props.contact}</p>
					<p className="card-text">Details: {props.cycle_desc}</p>
					{/* <button type="button" class="btn btn-warning">Owner Info</button>	 */}
				</div>
			</div>
		</>
	)
}
