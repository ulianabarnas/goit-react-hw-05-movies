import { Suspense, useState } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { getMovieDetailsById } from "services/api";
import Loader from "shared/Loader/Loader";
import { Info, NavItem, Paragraph, Rating, Title, Wrapper } from "./MovieDetails.styled";

export default function MovieDetails() {
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    
    const { movieId } = useParams();
    const location = useLocation();
    // const backLinkHref = location.state?.from ?? "/";

    useState(() => {
        setLoading(true);

        getMovieDetailsById(Number(movieId))
            .then(data => {
                setError(null);
                setMovie(data);
            })
            .catch(error => {
                setError(error);
                setMovie(null);
            })
            .finally(() => setLoading(false));

    }, []);

    if (!movie) {
        return null;
    }    
    // console.log(movie);
    
    const { title, release_date, overview, poster_path, genres, vote_average } = movie;
    const genreList = genres.map(({ name }) => name).join(", ");
    console.log(genreList);
    // const backLinkHref = location.state?.from ?? "/customers";

    return (
        <main>
            <NavItem to="/">Go back</NavItem>
            {loading && <Loader />}
            {error && <p>Movie load fail</p>}
            <Wrapper>
                <img src={`https://image.tmdb.org/t/p/w300${poster_path}`} alt={title} />
            
                <Info>
                    <Title>{title} ({release_date.slice(0, 4)})</Title>
                    <Paragraph><b>Vote average:</b> <Rating>{vote_average}</Rating></Paragraph>
                    <Paragraph><b>Overview:</b> {overview}</Paragraph>
                    <Paragraph><b>Genres:</b> {genreList}</Paragraph>
                </Info>
            </Wrapper>
            <h3>Additional information</h3>
            <ul>
                <li>
                    <Link to="cast">Cast</Link>
                </li>
                <li>
                    <Link to="reviews">Reviews</Link>
                </li>                
            </ul>
            <Suspense fallback={null}>
                <Outlet />
            </Suspense>
        </main>
    );
};
