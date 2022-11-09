// npm
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll } from "framer-motion";

// files
import logo from "../assets/images/netflix_logo.png";
import avatar from "../assets/images/netflix_avatar.png";
import { navVarient } from "../animations";

// styles
import styles from "../styles/Nav.module.css";

export default function Navbar() {
  // local state
  const [show, setShow] = useState(false);

  // properties
  const { scrollY } = useScroll();

  function updateScrollPos() {
    if (scrollY.current > 100 && scrollY?.current > scrollY?.prev) {
      setShow(true);
    }
  }

  useEffect(() => {
    return scrollY.onChange(() => updateScrollPos());
  }, []);

  return (
    <motion.nav
      className={styles.nav__main}
      variants={navVarient}
      animate={show ? "visible" : "hidden"}
      transition={{ ease: "linear", duration: 0.3 }}
    >
      <Link to={"/"}>
        <img src={logo} alt="netflix logo" className={styles.nav__logo} />
      </Link>
      <Link to={"/"}>
        <img src={avatar} alt="netflix avatar" className={styles.nav__avatar} />
      </Link>
    </motion.nav>
  );
}
