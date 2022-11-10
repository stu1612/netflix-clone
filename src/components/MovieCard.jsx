// npm
import { Link } from "react-router-dom";

// files
import styles from "../styles/Movies.module.css";
import slugifyString from "../utils/slugifyString";

export default function MovieCard({ item, movie }) {
  // properties
  const api_image_url = "https://image.tmdb.org/t/p/original/";

  const { poster_path, name, title, id } = item;

  const slug = slugifyString(title || name);

  return (
    <Link className={styles.poster} to={`overview/${slug}`} state={[id, movie]}>
      <img
        src={`${api_image_url}${poster_path}`}
        alt={name || title}
        className={styles.poster__image}
      />
    </Link>
  );
}
