// npm
import { Link } from "react-router-dom";

// files
import logo from "../assets/images/netflix_logo.png";
import styles from "../styles/Welcome.module.css";

export default function Welcome() {
  return (
    <div className={styles.login}>
      <nav className={styles.login__nav}>
        <Link to={"/"}>
          <img src={logo} alt="" className={styles.nav__logo} />
        </Link>
        <Link to={"/signin"}>
          <button className={styles.nav__btn}>Sign in</button>
        </Link>
      </nav>
      {/* <div className={styles.login__gradient} /> */}
      <div className={styles.login__content}>
        <h1 className={styles.content__h1}>
          Unlimted films, TV programmes and more.
        </h1>
        <h2 className={styles.content__h2}>
          Watch anywhere. Cancel at any time.
        </h2>
        <h3 className={styles.content__h3}>
          Ready to watch? Enter your email to create or restart your membership.
        </h3>
        <form className={styles.login__form}>
          <input
            type="email"
            placeholder="Email Address"
            onChange={() => {}}
            className={styles.login__input}
            required
          />
          {/* <Link to={"/registration"} state={email}> */}
          <Link to={"/registration"}>
            <button
              className={styles.login__btn}
              // disabled={isValid ? false : true}
            >
              get started
            </button>
          </Link>
        </form>
        {/* {error && <p className="login__error">{error}</p>} */}
      </div>
    </div>
  );
}
