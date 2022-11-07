// npm
import { useState, useEffect } from "react";
import axios from "axios";

// files
import MovieCard from "./MovieCard";

// styles
import styles from "../styles/Movies.module.css";

export default function Movies({ title, fetchUrl }) {
  // local state
  const [movies, setMovies] = useState([]);

  // properties
  const API_URL = "https://api.themoviedb.org/3";
  const apiRequest = axios.create({ baseURL: API_URL });

  // methods
  useEffect(() => {
    async function fetchMoviesData() {
      const request = await apiRequest.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchMoviesData();
  }, [fetchUrl]);

  //   async function fetchMovie(id) {
  //     const data = await axios.get(
  //       `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=videos`
  //     );
  //     console.log(data);
  //   }

  const moviesList = movies.map((movie) => {
    return <MovieCard key={movie.id} movie={movie} />;
  });

  return (
    <div className={styles.row}>
      <h2 className={styles.headingH2}>{title}</h2>
      <div className={styles.posters}>{moviesList}</div>
    </div>
  );
}
