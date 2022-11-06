// npm
import { useState } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";

// files
import { Modal } from "../components/Modal";
import Input from "../components/Input";
import json from "../JSON/signup.json";
import Loader from "../components/Loader";
import useModal from "../hooks/useModal";
import useSignUp from "../hooks/useSignUp";
import validateEmail from "../utils/validateEmail";
import validateString from "../utils/validateString";

// styles
import btnStyles from "../styles/Button.module.css";
import logo from "../assets/images/netflix_logo.png";
import navStyles from "../styles/Nav.module.css";
import styles from "../styles/Register.module.css";

export default function Register() {
  // properties
  const { error, signup } = useSignUp();
  const { isShowing, toggle } = useModal();
  const location = useLocation();
  const returnedEmail = location.state && location.state[0];
  const navigate = useNavigate();

  // local state
  const [userEmail, setUserEmail] = useState(returnedEmail);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // methods
  function handleSubmit(event) {
    event.preventDefault();
    signup(userEmail ? userEmail : email, password);
    if (email && password) {
      setUserEmail("");
      setPassword("");
    }
    setTimeout(() => {
      navigate("/");
      toggle();
    }, 1000);

    toggle();
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
                validation={validateEmail}
              />
            )}
            <Input
              state={[password, setPassword]}
              setup={json.password}
              classname={styles.input}
              validation={validateString}
            />
          </div>
          <div className={styles.checkbox}>
            <input type="checkbox" />
            <span>Please do not email me Netflix special offers</span>
          </div>
          <button className={styles.btn}>continue</button>
        </form>
      </div>
      <Modal isShowing={isShowing}>
        <Loader />
      </Modal>
      {error && <p>{error}</p>}
    </div>
  );
}
