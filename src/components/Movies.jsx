// npm
import { useState, useEffect } from "react";
import axios from "axios";

export default function Movies({ fetchUrl }) {
  // local state
  const [movies, setMovies] = useState([]);

  // properties
  const API_URL = "https://api.themoviedb.org/3";
  const apiRequest = axios.create({ baseURL: API_URL });
  //   const api_image_url = "https://image.tmdb.org/t/p/original/";

  // methods

  useEffect(() => {
    async function fetchMoviesData() {
      const request = await apiRequest.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchMoviesData();
  }, [fetchUrl]);

  const moviesList = movies.map((movie) => console.log(movie));

  return (
    <div>
      Movies
      {moviesList}
    </div>
  );
}
