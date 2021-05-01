function Post({post,show}) {
	return (
		<div>
			<p>{post.id}</p>
			<p>{post.title}</p>
			<button onClick={()=> {show(post)}}>{post.id}</button>
		</div>
	);
}

export default Post;
