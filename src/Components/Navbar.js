import React from 'react'

export default function Navbar(props) {

	return (
		<>
			<nav className="navbar navbar-expand-lg bg-success d-flex justify-content-between ">
				<div className="welcome navbar-brand text-light mx-2">
					{/* {console.log(props.name)} */}
					Welcome {props.user} !
				</div>
				<div className="container-fluid justify-content-center  ">
					<a className="navbar-brand text-primary" href="/homepage">CYCLEZ</a>
				</div>

				<div className="sell  mx-2">
					<a className="navbar-brand text-light" href="/sell">Sell Cycle</a>
				</div>
				<div className="delete  mx-2">
					<a className="navbar-brand text-light" href="/delete">Delete Cycle</a>
				</div>

				<div className="logout  mx-2">
					<a className="navbar-brand text-light" onClick={() => props.logout({})} href="/">Logout</a>
				</div>

			</nav>
		</>
	)
}
