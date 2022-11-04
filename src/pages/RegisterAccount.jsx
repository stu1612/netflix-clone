// npm
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

// files
import { Modal } from "../components/Modal";
import useModal from "../hooks/useModal";
import Loader from "../components/Loader";
import useSignUp from "../hooks/useSignUp";

// styles
import logo from "../assets/images/netflix_logo.png";
import styles from "../styles/Register.module.css";
import navStyles from "../styles/Nav.module.css";
import btnStyles from "../styles/Button.module.css";

export default function Register() {
  // local state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // properties
  const { error, signup } = useSignUp();
  const { isShowing, toggle } = useModal();
  const navigate = useNavigate();

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
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
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
