// npm
import { useState, useEffect } from "react";
import axios from "axios";

// files
import MovieCard from "./MovieCard";
import styles from "../styles/Movies.module.css";

export default function Media({ title, fetchUrl, movie }) {
  // local state
  const [items, setItems] = useState([]);

  // properties
  const API_URL = "https://api.themoviedb.org/3";
  const apiRequest = axios.create({ baseURL: API_URL });

  // methods
  useEffect(() => {
    async function fetchMoviesData() {
      const request = await apiRequest.get(fetchUrl);
      setItems(request.data.results);
      return request;
    }
    fetchMoviesData();
  }, [fetchUrl]);

  const mediaList = items.map((item) => {
    return <MovieCard key={item.id} item={item} movie={movie} />;
  });

  return (
    <div className={styles.row}>
      <h2 className={styles.headingH2}>{title}</h2>
      <div className={styles.posters}>{mediaList}</div>
    </div>
  );
}
