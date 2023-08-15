import MovieCard from "../../components/MovieCard/MovieCard";

export default function MovieListPage(props) {
    return (
        <div>
            {
                props.movies.map(movie => {
                    return <MovieCard key={movie.title} movie={movie} />
                })
            }
        </div>
    );
}