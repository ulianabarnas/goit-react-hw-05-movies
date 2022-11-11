import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import SharedLayout from "components/SharedLayout/SharedLayout";
import Cast from "components/Cast/Cast";
import Reviews from "components/Reviews/Reviews";
import { ToastContainer } from "react-toastify";
// import Home from "pages/Home/Home";
// import MovieDetails from "pages/MovieDetails/MovieDetails";

// import Movies from "pages/Movies/Movies";
const Home = lazy(() => import("../../pages/Home/Home"));
const Movies = lazy(() => import("../../pages/Movies/Movies"));
const MovieDetails = lazy(() => import("../../pages/MovieDetails/MovieDetails"));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout/>}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />}/>
          <Route path="movies/:movieId" element={<MovieDetails/>}>
            <Route path="cast" element={<Cast/>} />
            <Route path="reviews" element={<Reviews/>}/>
          </Route>
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
      <ToastContainer
        autoClose={4000}
        hideProgressBar
      />
    </>
  );
};
