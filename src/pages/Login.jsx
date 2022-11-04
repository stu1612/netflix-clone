// npm
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

// files
import { Modal } from "../components/Modal";
import useModal from "../hooks/useModal";
import Loader from "../components/Loader";
import useLogin from "../hooks/useLogin";

// styles
import logo from "../assets/images/netflix_logo.png";
import styles from "../styles/Login.module.css";
import navStyles from "../styles/Nav.module.css";

export default function SignUp() {
  // local state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // properties
  const { error, login } = useLogin();
  const { isShowing, toggle } = useModal();
  const navigate = useNavigate();

  // methods
  function handleSubmit(event) {
    event.preventDefault();
    login(email, password);
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
    <div className="netflix__banner">
      <nav className={navStyles.nav}>
        <Link to={"/"}>
          <img src={logo} alt="" className={navStyles.nav__logo} />
        </Link>
      </nav>
      <div className="gradient__wrapper" />
      <form onSubmit={handleSubmit} className={styles.form}>
        <h1 className={styles.heading1}>Sign In</h1>
        <input
          placeholder="Email"
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.input}
        />
        <input
          placeholder="Password"
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={styles.input}
        />
        <button type="submit" className={styles.btn}>
          Sign In
        </button>
        <h4 className={styles.heeading4}>
          <span className={styles.span}>New to Netflix?</span>
          <Link to={"/registration"}>
            <span className={styles.span__link}>Sign Up now</span>
          </Link>
        </h4>
      </form>
      <Modal isShowing={isShowing}>
        <Loader />
      </Modal>
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
}
