// npm
import { useState } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";

// files
import { Modal } from "../components/Modal";
import Loader from "../components/Loader";
import useModal from "../hooks/useModal";
import useSignUp from "../hooks/useSignUp";

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
  const returnedEmail = location.state[0];
  console.log(returnedEmail);
  const navigate = useNavigate();

  // local state
  const [email, setEmail] = useState(returnedEmail);
  const [password, setPassword] = useState("");

  // methods
  function handleSubmit(event) {
    event.preventDefault();
    signup(email, password);
    if (email && password) {
      setEmail("");
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
          <input value={email} disabled />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
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
