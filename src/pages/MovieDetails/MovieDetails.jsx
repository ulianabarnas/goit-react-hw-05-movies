import { useState } from "react";
import {  useParams } from "react-router-dom";
import { getMovieDetailsById } from "services/api";


export default function MovieDetails() {
    const {movieId} = useParams();

    const [movie, setMovie] = useState(null);
    // const location = useLocation();

    useState(() => {
            getMovieDetailsById(Number(movieId)).then(setMovie)
    }, []);

    if (!movie) {
        return null;
    }    
    console.log(movie);
    
    const { title, release_date, overview, poster_path, genres, vote_average } = movie;
    const genreList = genres.map(({ name }) => name).join(", ");
    console.log(genreList);
    // const backLinkHref = location.state?.from ?? "/customers";

    return (
        <main>
            {/* <Link to={backLinkHref}>Go back</Link> */}
            <img src={poster_path} alt={title} />
            <h2>{title} ({release_date.slice(0, 4)})</h2>
            <p><b>Vote average:</b> {vote_average}</p>
            <p><b>Overview:</b> {overview}</p>
            <p><b>Genres:</b> {genreList}</p>
        </main>
    );
};
