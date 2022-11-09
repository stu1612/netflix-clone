// npm
import { useState, useEffect } from "react";
import axios from "axios";

// styles
import styles from "../styles/Movies.module.css";

export default function MovieDetail({ id }) {
  // local state
  const [movieData, setMovieData] = useState();
  // properties
  const api_image_url = "https://image.tmdb.org/t/p/original/";

  // methods
  useEffect(() => {
    async function fetchMovie(id) {
      await axios
        .get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&append_to_response=videos`
        )
        .then((res) => {
          const obj = res.data;
          setMovieData(obj);
        });
    }
    fetchMovie(id);
  }, [id]);

  const movieDetails = movieData && (
    <div className={styles.container__outer}>
      <div className={styles.container__inner}>
        <div className={styles.media__image}>
          <img src={`${api_image_url}${movieData.backdrop_path}`} alt="" />
        </div>
        <div className={styles.media__content}>
          <div>
            <h1>I am some text</h1>
          </div>
          <span className={styles.close}>X</span>
        </div>
      </div>
    </div>
  );

  return movieDetails;
}
