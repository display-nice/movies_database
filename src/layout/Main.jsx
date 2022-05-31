import React from "react";
import {Movies} from '../components/Movies';
import {Search} from '../components/Search';
import {Preloader} from '../components/Preloader';

const API_KEY = process.env.REACT_APP_API_KEY;

class Main extends React.Component {
    state = {
        movies: [],
        loading: true
    }
    componentDidMount() {
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
            .then(response => response.json())
            .then(jsonContent => this.setState({movies: jsonContent.Search, loading: false}))
            .catch((error) => {
                console.log(error);
                this.setState({loading: false})
            })
    }

    searchMovies = (searchText, type = 'all') => {
        this.setState({loading: true});
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${searchText}${type !== 'all' ? `&type=${type}` : ''}`)
            .then(response => response.json())
            .then(jsonContent => this.setState({movies: jsonContent.Search, loading: false}))
            .catch((error) => {
                console.log(error);
                this.setState({loading: false})
            })
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