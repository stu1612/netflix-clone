// npm
import { useState } from "react";
import { Link } from "react-router-dom";

// files
import logo from "../assets/images/netflix_logo.png";
import styles from "../styles/Welcome.module.css";
import navStyles from "../styles/Nav.module.css";

export default function Welcome() {
  // local state
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(null);
  const [error, setError] = useState(null);

  // methods
  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  function handleChange(event) {
    if (!isValidEmail(event.target.value)) {
      setError("Email is invalid");
      setIsValid(false);
    } else {
      setError(null);
      setIsValid(true);
    }
    setEmail(event.target.value);
  }
  return (
    <div className={styles.login}>
      <nav className={navStyles.nav}>
        <Link to={"/"}>
          <img src={logo} alt="" className={navStyles.nav__logo} />
        </Link>
        <Link to={"/signin"}>
          <button className={navStyles.nav__btn}>Sign in</button>
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
            onChange={handleChange}
            className={styles.login__input}
            required
          />
          <Link to={"/registration"} state={email}>
            <button
              className={styles.login__btn}
              // disabled={isValid ? false : true}
            >
              get started
            </button>
          </Link>
        </form>
        {error && <p className="login__error">{error}</p>}
      </div>
    </div>
  );
}
