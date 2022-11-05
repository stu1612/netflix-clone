// npm
import { useState } from "react";
import { Link } from "react-router-dom";

// files
import Input from "../components/Input";
import json from "../JSON/welcome.json";
import validateEmail from "../utils/validateEmail";

// styles
import btnStyles from "../styles/Button.module.css";
import logo from "../assets/images/netflix_logo.png";
import navStyles from "../styles/Nav.module.css";
import styles from "../styles/Welcome.module.css";

export default function Welcome() {
  // local state
  const [email, setEmail] = useState("");

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
          <Input
            state={[email, setEmail]}
            setup={json.email}
            classname={styles.input}
            validation={validateEmail}
          />
          <Link to={email ? "/registration" : ""} state={email}>
            <button className={styles.btn}>Get started</button>
          </Link>
        </form>
      </div>
    </div>
  );
}
