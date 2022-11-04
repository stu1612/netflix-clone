// npm
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

// files
import { Modal } from "../components/Modal";
import useModal from "../hooks/useModal";
import Loader from "../components/Loader";
import useLogin from "../hooks/useLogin";
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
    <div className={styles.login}>
      <nav className={navStyles.nav}>
        <Link to={"/"}>
          <img src={logo} alt="" className={navStyles.nav__logo} />
        </Link>
      </nav>
      {/* <div className={styles.signin__gradient} /> */}
      <form onSubmit={handleSubmit} className={styles.login__form}>
        <h1 className={styles.signin__headingH1}>Sign In</h1>
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
        <button type="submit" className={styles.signin__btn}>
          Sign In
        </button>
        <h4 className={styles.signin__headingH4}>
          <span className={styles.span}>New to Netflix?</span>
          <Link to={"/registration"}>
            <span className={styles.span__link}>Sign Up now</span>
          </Link>
        </h4>
      </form>
    </div>
  );
}

{
  /* <form onSubmit={handleSubmit}>
<input
  type="email"
  placeholder="Email"
  value={email}
  onChange={(event) => setEmail(event.target.value)}
/>
<input
  type="password"
  placeholder="Password"
  value={password}
  onChange={(event) => setPassword(event.target.value)}
/>
<button>Continue</button>
</form>
<Modal isShowing={isShowing}>
<Loader />
</Modal>
{error && <p>{error}</p>} */
}
