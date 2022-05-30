import React from "react";
import {Movies} from '../components/Movies';
import {Search} from '../components/Search';
import {Preloader} from '../components/Preloader';

class Main extends React.Component {
    state = {
        movies: [],
        loading: true
    }
    componentDidMount() {
        fetch('http://www.omdbapi.com/?apikey=7e2ac28f&s=matrix')
            .then(response => response.json())
            .then(jsonContent => this.setState({movies: jsonContent.Search, loading: false}))
    }

    searchMovies = (searchText, type = 'all') => {
        this.setState({loading: true});
        fetch(`http://www.omdbapi.com/?apikey=7e2ac28f&s=${searchText}${type !== 'all' ? `&type=${type}` : ''}`)
            .then(response => response.json())
            .then(jsonContent => this.setState({movies: jsonContent.Search, loading: false}))
    }

    render() {
        const {movies, loading} = this.state;
        return <main className="container content">
            <Search searchMovies={this.searchMovies}/>            
            {/* разобраться, почему здесь не работает иф и как правильно его использовать */}
            { loading ? (<Preloader/>) : (<Movies movies={movies}/>) } 
        </main>
    }
}

export {Main};