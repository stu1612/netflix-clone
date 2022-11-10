// npm
import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import axios from "axios";
// files
import logo from "../assets/images/netflix_logo.png";
import avatar from "../assets/images/netflix_avatar.png";

// styles
import navStyles from "../styles/Nav.module.css";
import MediaDetail from "../components/MediaDetail";

export default function Overview() {
  // local state
  const [mediaDetail, setMediaDetail] = useState();
  // properties
  const location = useLocation();
  const { state } = location;
  const isMovie = state[1];

  // methods
  // useEffect(() => {
  //   async function fetchMovie(id) {
  //     const url = isMovie
  //       ? `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&append_to_response=videos`
  //       : `https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.REACT_APP_API_KEY}&append_to_response=videos`;
  //     await axios.get(url).then((res) => {
  //       const obj = res.data;
  //       setMediaDetail(obj);
  //     });
  //   }
  //   fetchMovie(state);
  // }, [state]);

  return (
    <div className="overview">
      <nav className={navStyles.nav__sub}>
        <Link to={"/"}>
          <img src={logo} alt="netflix logo" className={navStyles.nav__logo} />
        </Link>
        <Link to={"/"}>
          <img
            src={avatar}
            alt="netflix avatar"
            className={navStyles.nav__avatar}
          />
        </Link>
      </nav>
      <main>{mediaDetail && <MediaDetail mediaDetail={mediaDetail} />}</main>
    </div>
  );
}
