import { string } from "prop-types";

function elementClicked(pais: string)
{
	console.log('clicked', pais);
}

function ListGroup()
{
	const paises = [
		"Mexico",
		"Estados Unidos",
		"Colombia", 
		"Peru"
	];

	if (paises.length == 0)
	{
		return <h1>NO items Found</h1>;
	}
	else
	{
		return (
			<div className="col-12">
				<ul className="list-group">
					{
						paises.map( (pais, index) => (
							<li
								key={pais}
								onClick={() => elementClicked(pais)}
								className="list-group-item"
							>
								{pais}
							</li>
						))
					}
				</ul>
			</div>
		);
	}
}

export default ListGroup;
