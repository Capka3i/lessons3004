import {useEffect, useState} from 'react';
import Post from './Post';
import '../style.css';

function Posts() {
	let [posts, setPosts] = useState([]);
	let [post, setPost] = useState([]);
	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then(value => value.json())
			.then(value => setPosts([...value]));
	}, []);
	const show = (x) => {
		setPost(x.body);

	};


	return (
		<div className={'postBody'}>
			<div className={''}>{


				posts.map(value => <Post post={value} show={show}/>)

			}</div>
			<div>
				{post}
			</div>
		</div>
	);
}

export default Posts;
