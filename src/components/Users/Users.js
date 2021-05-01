import {useEffect, useState} from 'react';
import '../style.css';
import User from './User';


function Users() {
	let [users, setUsers] = useState([]);
	const [show, setShow] = useState([]);
	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(value => value.json())
			.then(value => {
				setUsers([...value]);
			});
	}, []);
	const info = (x) => {
		let str = `'id:  ${x.id} 
	name: ${x.name} 
	username: ${x.username} 
	email: ${x.email}
	address: {
	street: ${x.address.street} 
	suite: ${x.address.suite} 
	city: ${x.address.city} 
	zipcode: ${x.address.zipcode} 
	geo: {
	lat: ${x.address.geo.lat} 
	lng: ${x.address.geo.lng}}}
	phone: ${x.phone} 
	website: ${x.website} 
	company: {
	name: ${x.company.name} 
	catchPhrase: ${x.company.catchPhrase}
	bs: ${x.company.bs}`;
		setShow(str);
	};

	return (
		<div>
			<div>{
				users.map((value, index) => <User key={index} vall={value} info={info}/>)
			}</div>
			<div className="ecran">
				{show}
			</div>
		</div>
	);
}

export default Users;
