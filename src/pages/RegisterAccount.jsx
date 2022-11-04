// npm
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

// files
import { Modal } from "../components/Modal";
import useModal from "../hooks/useModal";
import Loader from "../components/Loader";
import useSignUp from "../hooks/useSignUp";

import logo from "../assets/images/netflix_logo.png";
import styles from "../styles/Register.module.css";
import navStyles from "../styles/Nav.module.css";

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
          <button className={navStyles.nav__btn}>Sign in</button>
        </Link>
      </nav>
      <div className={styles.register__content}>
        <h1 className={styles.register__headingH1}>
          Create a password to start your membership
        </h1>
        <h2 className={styles.register__headingH2}>
          Just a few more steps and you're finished. We hate paperwork too.
        </h2>
        <form onSubmit={handleSubmit} className={styles.register__form}>
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
          <div className={styles.register__checkbox}>
            <input type="checkbox" />
            <span>Please do not email me Netflix special offers</span>
          </div>
          <button className={styles.register__btn}>continue</button>
        </form>
      </div>
    </div>
  );
}

{
  /* <h1>Sign up</h1>
<Modal isShowing={isShowing}>
  <Loader />
</Modal>
{error && <p>{error}</p>} */
}
