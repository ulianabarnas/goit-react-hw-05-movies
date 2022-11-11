import MovieList from "components/MovieList/MovieList";
import { useEffect } from "react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getMovieByQuery } from "services/api";
import SearchBox from "shared/SearchBox/SearchBox";


export default function Movies() {
    const [searchedMovies, setSearchedMovies] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('query') ?? "";

    // console.log(query);

    useEffect(() => {
        getMovieByQuery(query).then(data => setSearchedMovies(data.results));
    }, [query])

    const handleSearchBoxSubmit = value => {
        setSearchParams({ query: value.toLowerCase() });
    }

    console.log(searchedMovies);
    return (
        <main>
            <SearchBox onSubmit={handleSearchBoxSubmit} />
            {searchedMovies.length > 0 && <MovieList movies={searchedMovies} />}
        </main>
    );
};
