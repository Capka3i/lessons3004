import axios from 'axios';

export default axios.create({
	baseURL:'https://jsonplaceholder.typicode.com'

	});
console.log(axios.get('/users'));