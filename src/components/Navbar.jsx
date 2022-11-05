// npm
import { Link } from "react-router-dom";

// files
import logo from "../assets/images/netflix_logo.png";
import avatar from "../assets/images/netflix_avatar.png";

// styles
import styles from "../styles/Nav.module.css";

export default function Navbar() {
  return (
    <nav className={styles.nav__main}>
      <Link to={"/"}>
        <img src={logo} alt="netflix logo" className={styles.nav__logo} />
      </Link>
      <Link to={"/"}>
        <img src={avatar} alt="netflix avatar" className={styles.nav__avatar} />
      </Link>
    </nav>
  );
}
