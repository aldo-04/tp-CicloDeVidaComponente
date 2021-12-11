import ContentRowMovie from "./ContentRowMovie"

let components = [
	{
		titulo : "Movies in database",
		borde : "border-left-primary",
		color : "text-primary",
		total : 21,
		icono : "fas fa-film fa-2x text-gray-300"
	},
	{
		titulo : "Total awards",
		borde : "border-left-success",
		color : "text-success",
		total : 79,
		icono : "fas fa-award fa-2x text-gray-300"
	},
	{
		titulo : "Actors quantity",
		borde : "border-left-warning",
		color : "text-warning",
		total : 49,
		icono : "fas fa-user fa-2x text-gray-300"
	}
]

function ContentRowTop(props) {
    return (
        <div className="row">
			{
				components.map((component,i)=>{
					return (<ContentRowMovie
					key={component.titulo + i}
					total={component.total}
					titulo={component.titulo}
					icono={component.icono}
					borde={component.borde}
					color={component.color}
					/>)
				})
			}
		</div>
    )
}

export default ContentRowTop