import React from "react";
import {Movies} from '../components/Movies'

class Main extends React.Component {
    state = {
        movies: []
    }
    componentDidMount() {
        fetch('http://www.omdbapi.com/?apikey=7e2ac28f&s=matrix')
            .then(response => response.json())
            .then(jsonContent => this.setState({movies: jsonContent.Search}))
    }

    render() {
        const {movies} = this.state;
        return <main className="container content">
            {/* разобраться, почему здесь не работает иф и как правильно его использовать */}
            { movies.length ? (<Movies movies={this.state.movies}/>) : (<h3>Loading...</h3>) } 
            
        </main>
    }
}

export {Main};