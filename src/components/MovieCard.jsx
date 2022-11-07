// files
import styles from "../styles/Movies.module.css";

export default function MovieCard({ movie }) {
  // properties
  const api_image_url = "https://image.tmdb.org/t/p/original/";

  const { backdrop_path, poster_path, name, title } = movie;
  return (
    <div className={styles.poster}>
      <img
        src={`${api_image_url}${poster_path}`}
        alt={name || title}
        className={styles.poster__image}
      />
    </div>
  );
}
