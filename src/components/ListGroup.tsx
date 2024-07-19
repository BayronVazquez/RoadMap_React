function ListGroup() {
	const paises = ["Mexico", "Estados Unidos", "Colombia", "Peru"];

	return (
		<div className="col-12">
			<ul className="list-group">
				{paises.map(pais => (
					<li key={pais}>{pais}</li>
				))}
			</ul>
		</div>
	);
}

export default ListGroup;
