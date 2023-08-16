
import './MovieCard.css';
import { Link } from 'react-router-dom';

export default function MovieCard({ movie, index }) {
    const imageURL = movie.posterPath;

    const cardStyle = {
        backgroundImage: `url(${imageURL})`
    }

    return (
        <>
            <Link to={`/movies/${(movie.title)}`}>
                <div className="card" style={cardStyle}>
                    <div className="MovieContent">
                        <p>{movie.title}</p>
                        <p>{movie.releaseDate}</p>
                    </div>
                </div>
            </Link>
        </>
    )
}