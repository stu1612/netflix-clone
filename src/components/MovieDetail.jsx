// styles
import styles from "../styles/Movies.module.css";

export default function MovieDetail({ id }) {
  return (
    <div className={styles.container__outer}>
      <div className={styles.container__inner}>
        <h2>{id} number</h2>
      </div>
    </div>
  );
}
