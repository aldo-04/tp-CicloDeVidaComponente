import React, { Component } from 'react'
import Genre from './Genre'

class Genres extends Component {

	constructor (props) {
		super(props)
		this.state = {
			genresList: []
		}
	}

	componentDidMount() {
		fetch('http://localhost:3001/apis/genres')
			.then(respuesta => {
				return respuesta.json()
			})
			.then(genres => {
				this.setState({ genresList: genres.data })
			})
			.catch(error => console.log(error))
	}

	colorDeFondo() {
		document.querySelector("#div").classList.add("bg-secondary")
	}

	render() {
		return (
			<React.Fragment>
						<div className="col-lg-6 mb-4">						
							<div className="card shadow mb-4">
								<div className="card-header py-3">
									<h5 onMouseOver={ this.colorDeFondo } className="m-0 font-weight-bold text-gray-800">Genres in Data Base</h5>
								</div>
								<div className="card-body" id="div">
									<div className="row">
										{this.state.genresList.map((genre, index) => {
											return <Genre {...genre} key={index} />
										})}
									</div>
								</div>
							</div>
						</div>
			</React.Fragment>
		)
	}

}

export default Genres