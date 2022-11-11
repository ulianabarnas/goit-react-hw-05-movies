import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import SharedLayout from "components/SharedLayout/SharedLayout";
// import Home from "pages/Home/Home";
// import MovieDetails from "pages/MovieDetails/MovieDetails";

// import Movies from "pages/Movies/Movies";
const Home = lazy(() => import("../../pages/Home/Home"));
const Movies = lazy(() => import("../../pages/Movies/Movies"));
const MovieDetails = lazy(() => import("../../pages/MovieDetails/MovieDetails"));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout/>}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />}/>
        <Route path="movies/:movieId" element={<MovieDetails/>}>
          <Route path="cast" element={<div>Cast</div>} />
          <Route path="reviews" element={<div>Reviews</div>}/>
        </Route>
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};
