import "../css/Favourites.css"
import { useMovieContext } from "../context/MovieContext"
import MovieCard from "../components/MovieCard"

function Favourites(){
    const {favourites} = useMovieContext();

    if (favourites) {
        return (
        <div className= "Fvaourites"> 
            <h2>Your Favourites</h2>
            <div className= "movies-grid">
            {favourites.map((movie) => (
                <MovieCard movie= {movie} key={movie.id} />
            ))}
        </div>
    </div>
    )}

    return <div className= "favourites-empty">
        <h2>No Favourites Movies Yet</h2>
        <p>Start adding movies to your favourites and they will appear here!</p>
    </div>
}

export default Favourites