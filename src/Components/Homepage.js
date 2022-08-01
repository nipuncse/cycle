import React, { useEffect, useState } from 'react'
import Card from './Card'
import Navbar from './Navbar'
import axios from 'axios'
export default function Homepage(props) {
	const [newData, setnewData] = useState([]);
	useEffect(() => {

		async function getResults() {
			const res = await axios.get("https://cycleeapp.herokuapp.com/getcycles");
			setnewData(res.data.details);
			// console.log(res.data.details);
		}
		getResults();
	}, [])

	return (
		<>
			<Navbar user={props.login} logout={props.updateUser} />

			<div className="container mx-auto my-5">
				<div className="row">
					{/* <Card /> */}
					{newData.map((element) => {
						return (
							<Card cycle_name={element.cycle_name} cycle_company={element.cycle_company} cycle_price={element.cycle_price} owner_name={element.owner_name} contact={element.owner_contact} cycle_desc={element.cycle_desc} />
						)
					})};

				</div>
			</div>
		</>
	)
}
