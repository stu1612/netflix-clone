// npm
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

// files
import Input from "../components/Input";
import json from "../JSON/signup.json";
import useModal from "../hooks/useModal";
import useSignUp from "../hooks/useSignUp";
import LoadingModal from "../components/LoadingModal";

// styles
import btnStyles from "../styles/Button.module.css";
import logo from "../assets/images/netflix_logo.png";
import navStyles from "../styles/Nav.module.css";
import styles from "../styles/Register.module.css";

export default function Register() {
  // global state
  const { signup, error, loading } = useSignUp();
  const { isShowing, toggle } = useModal();

  // properties
  const location = useLocation();
  const returnedEmail = location.state && location.state[0];

  // local state
  const [userEmail, setUserEmail] = useState(returnedEmail);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // methods
  function handleSubmit(event) {
    event.preventDefault();
    signup(userEmail ? userEmail : email, password);
    if (email && password) {
      resetForm();
    }
    setTimeout(() => {
      toggle();
    }, 1000);

    toggle();
  }

  function resetForm() {
    setUserEmail("");
    setPassword("");
  }

  return (
    <div className={styles.register}>
      <nav className={navStyles.nav}>
        <Link to={"/"}>
          <img src={logo} alt="" className={navStyles.nav__logo} />
        </Link>
        <Link to={"/signin"}>
          <button className={btnStyles.white__btn}>Sign in</button>
        </Link>
      </nav>
      <div className={styles.content}>
        <h1 className={styles.heading1}>
          Create a password to start your membership
        </h1>
        <h2 className={styles.heading2}>
          Just a few more steps and you're finished. We hate paperwork too.
        </h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className="form__wrapper">
            {returnedEmail && (
              <input value={userEmail} className={styles.input} disabled />
            )}
            {!returnedEmail && (
              <Input
                state={[email, setEmail]}
                setup={json.email}
                classname={styles.input}
              />
            )}
            <Input
              state={[password, setPassword]}
              setup={json.password}
              classname={styles.input}
            />
            {error && <small className="error">{error}</small>}
          </div>
          <div className={styles.checkbox}>
            <input type="checkbox" />
            <span>Please do not email me Netflix special offers</span>
          </div>
          <button className={styles.btn}>continue</button>
        </form>
      </div>
      {loading && <LoadingModal isShowing={isShowing} />}
    </div>
  );
}
