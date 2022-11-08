// npm
import { useEffect } from "react";
import axios from "axios";

// styles
import styles from "../styles/Movies.module.css";

export default function MovieDetail({ id }) {
  useEffect(() => {
    async function fetchMovie(id) {
      const data = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&append_to_response=videos`
      );
      console.log(data);
    }
    fetchMovie(id);
  }, [id]);

  return (
    <div className={styles.container__outer}>
      <div className={styles.container__inner}>
        <h2>{id} number</h2>
      </div>
    </div>
  );
}
