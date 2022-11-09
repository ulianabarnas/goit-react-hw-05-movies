import { SharedLayout } from "components/SharedLayout/SharedLayout";
import { Route, Routes } from "react-router-dom";


export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout/>}>
        <Route index element={<div>Home</div>} />
        <Route path="movies" element={<div>Movies</div>}>
          <Route path=":movieId" element={<div>MovieDetails</div>}>
            <Route path="cast" element={<div>Cast</div>} />
            <Route path="reviews" element={<div>Reviews</div>}/>
          </Route>
        </Route>
      </Route>
    </Routes>
  );
};
