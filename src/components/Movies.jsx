import {Movie} from './Movie';

function Movies(props) {
    const {movies} = props;
    return <div className="movies">
        {/* что здесь происходит разбирается в видео 5.5 в первой половине */}
        {movies.map(movie => {
            return <Movie key={movie.imdbID} {...movie}/>
        })}
    </div>
}
export {Movies};