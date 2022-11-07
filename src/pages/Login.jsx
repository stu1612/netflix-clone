// npm
import { useState } from "react";
import { Link } from "react-router-dom";

// files
import useLogin from "../hooks/useLogin";
import useModal from "../hooks/useModal";
import SignupForm from "../components/SignupForm";
import LoadingModal from "../components/LoadingModal";

// styles
import logo from "../assets/images/netflix_logo.png";
import navStyles from "../styles/Nav.module.css";
import styles from "../styles/Login.module.css";

export default function SignUp() {
  // local state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // properties
  const { login, error, loading } = useLogin();
  const { isShowing, toggle } = useModal();

  // methods
  function handleSubmit(event) {
    event.preventDefault();
    login(email, password);
    if (email && password) {
      resetForm();
    }
    setTimeout(() => {
      toggle();
    }, 1000);
    toggle();
  }

  function resetForm() {
    setEmail("");
    setPassword("");
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
        <div className="form__wrapper">
          <SignupForm
            emailState={[email, setEmail]}
            passwordState={[password, setPassword]}
            classStyle={styles.input}
          />
          {error && <small className="error">{error}</small>}
        </div>
        <button type="submit" className={styles.btn}>
          Sign In
        </button>

        <h4 className={styles.heading4}>
          <span className={styles.span}>New to Netflix?</span>
          <Link to={"/registration"}>
            <span className={styles.span__link}>Sign Up now</span>
          </Link>
        </h4>
      </form>
      {loading && <LoadingModal isShowing={isShowing} />}
    </div>
  );
}
