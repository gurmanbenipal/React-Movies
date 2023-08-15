
import { useParams } from "react-router-dom";

export default function MovieDetailPage( {movies} ) {
    let { movieName } = useParams();
    let movie = movies.find(mov => mov.title === movieName)
    return (
        <div>
            <h1>{movie.title}</h1>
            <h2>Realeased: {new Date(movie.releaseDate).toLocaleDateString()}</h2>
            <h3>Cast Members:</h3>
            <ul>
                {
                    movie.cast.map(actor => {
                        return <li key={actor}>{actor}</li>
                    })
                }
            </ul>
            <img src={`${movie.posterPath}`} />
        </div>
    );
}