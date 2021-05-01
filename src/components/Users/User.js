function User({vall,info}) {
	return (
		<div>
			{vall.id} -
			{vall.name} -
			{vall.email} -
			{vall.address.geo.lat} -
			{vall.address.geo.lng}
			<button onClick={() => info(vall)}>info</button>
		</div>

	);
}

export default User;
