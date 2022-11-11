import MovieList from "components/MovieList/MovieList";
import { useEffect } from "react";
import { useState } from "react";
import { getTrendingMovies } from "services/api";
import Loader from "shared/Loader/Loader";


export default function Home() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);

        getTrendingMovies()
            .then(data => {
                setError(null);
                setMovies(data.results);
            })
            .catch(error => {
                setError(error);
                setMovies([]);
            })
            .finally(() => setLoading(false));
        
    }, []);
    
    return (
        <main>
            <h1>Trending today</h1>
            {loading && <Loader />}
            {error && <p>Movie load fail</p>}
            {movies.length > 0 && <MovieList movies={movies} />}
        </main>
    );
};

