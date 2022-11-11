const BASE_URL = 'https://api.themoviedb.org/3';
const KEY = 'cb3a4c8f64515db00f59416b4e7a67de';

export function getTrendingMovies() {
  return fetch(`${BASE_URL}/trending/movie/week?api_key=${KEY}`).then(
    response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    }
  );
}

export function getMovieDetailsById(id) {
  return fetch(`${BASE_URL}/movie/${id}?api_key=${KEY}&language=en-US`).then(
    response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    }
  );
}

// https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US
