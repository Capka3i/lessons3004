import axios from './api';
import Users0 from './Users0';
import {useEffect, useState} from 'react';

function Users1() {
	let [user, setUser] = useState([]);
	// useEffect(() => {
	// 	axios.get('/albums')
	// 			  .then(value => value.json())
	// 			  .then(value => {setUser([...value])});
	//
	//
	//
	// }, []);
useEffect(()=>{
	fetch('https://jsonplaceholder.typicode.com/users')
	  .then(value => value.json())
	  .then(value => setUser([...value]))
})
	return (
		<div>
			{
				user.map((value,index) => <Users0 key={index} valls={value}/>)
			}
		</div>
	);
}

export default Users1;
