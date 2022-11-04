// npm
import { useState } from "react";
import { Link } from "react-router-dom";

// files
import logo from "../assets/images/netflix_logo.png";
import styles from "../styles/Welcome.module.css";
import navStyles from "../styles/Nav.module.css";
import btnStyles from "../styles/Button.module.css";

export default function Welcome() {
  // local state
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);

  // methods
  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  function handleChange(event) {
    if (!isValidEmail(event.target.value)) {
      setError("Email is invalid");
    } else {
      setError(null);
    }
    setEmail(event.target.value);
  }
  return (
    <div className="netflix__banner">
      <nav className={navStyles.nav}>
        <Link to={"/"}>
          <img src={logo} alt="" className={navStyles.nav__logo} />
        </Link>
        <Link to={"/signin"}>
          <button className={btnStyles.red__btn}>Sign in</button>
        </Link>
      </nav>
      <div className="gradient__wrapper" />
      <div className={styles.content}>
        <h1 className={styles.heading1}>
          Unlimted films, TV programmes and more.
        </h1>
        <h2 className={styles.heading2}>Watch anywhere. Cancel at any time.</h2>
        <h3 className={styles.heading3}>
          Ready to watch? Enter your email to create or restart your membership.
        </h3>
        <form className={styles.form}>
          <input
            type="email"
            placeholder="Email Address"
            onChange={handleChange}
            className={styles.input}
          />
          <Link to={"/registration"} state={email}>
            <button className={styles.btn}>Get started</button>
          </Link>
        </form>
        {error && <p className="error">{error}</p>}
      </div>
    </div>
  );
}
