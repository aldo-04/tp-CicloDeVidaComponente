import React, {Component} from 'react'
import Movie from './Movie'

class Table extends Component{
    constructor () {
		super()
		this.state = {
			movies: []
		}
	}

    componentDidMount() {
        fetch("http://localhost:3001/api")
        .then(response => response.json())
        .then(movies => {
            this.setState( {movies : movies.data} )
        })
    }

    render() {
        return  (
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Titulo</th>
                        <th scope="col">Duración</th>
                        <th scope="col">Rating</th>
                        <th scope="col">Género</th>
                        <th scope="col">Premios</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.movies.map((movie,i) => {
                            return < Movie 
                            key={movie.title + i}
                            title={movie.title} 
                            duration={movie.length}
                            rating={movie.rating}
                            genre={movie.genre ? movie.genre.name : "Sin genero"}
                            awards={movie.awards}/>
                        })
                    }
                </tbody>
            </table>
            )
    }
}


export default Table