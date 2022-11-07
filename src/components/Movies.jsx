// npm
import { useState, useEffect } from "react";
import axios from "axios";

export default function Movies({ fetchUrl }) {
  // local state
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState({});

  // properties
  const API_URL = "https://api.themoviedb.org/3";
  const apiRequest = axios.create({ baseURL: API_URL });
  //   const api_image_url = "https://image.tmdb.org/t/p/original/";

  const API_KEY = process.env.REACT_APP_API_KEY;

  // methods
  useEffect(() => {
    async function fetchMoviesData() {
      const request = await apiRequest.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchMoviesData();
  }, [fetchUrl]);

  async function fetchMovie(id) {
    const data = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=videos`
    );
    console.log(data);
  }

  const moviesList = movies.map((movie) => (
    <h2
      style={{ backgroundColor: "white", padding: "2rem" }}
      key={movie.id}
      onClick={() => fetchMovie(movie.id)}
    >
      {movie.name || movie.title}
    </h2>
  ));
  return (
    <div>
      Movies
      {moviesList}
    </div>
  );
}
