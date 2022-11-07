// files
import truncateString from "../utils/truncateString";
import logo from "../assets/images/netflix_logo.png";

// styles
import styles from "../styles/Banner.module.css";
import btnStyles from "../styles/Button.module.css";

export default function Banner() {
  return (
    <header className={styles.banner}>
      <div className={styles.banner__gradient} />

      <img src={logo} alt="netflix logo" className={styles.banner__logo} />
      <div className={styles.banner__content}>
        <h1 className={styles.banner__title}>I am a movie title</h1>
        <div className={styles.banner__buttons}>
          <button className={btnStyles.banner__btn}>Play</button>
          <button className={btnStyles.banner__btn}>My List</button>
        </div>
        <h1 className={styles.banner__description}>
          {truncateString(
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint
              ullam quas iure beatae autem quidem magni repudiandae. Nemo modi
              minus ipsum ut?
            </p>,
            150
          )}
        </h1>
      </div>
      <div className={styles.banner__fade} />
    </header>
  );
}
