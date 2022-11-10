// npm
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

// files
import styles from "../styles/Movies.module.css";
import slugifyString from "../utils/slugifyString";
import { Modal } from "./Modal";
import useModal from "../hooks/useModal";
import MediaDetail from "./MediaDetail";

export default function MovieCard({ item, movie }) {
  const [media, setMedia] = useState();
  // properties
  const api_image_url = "https://image.tmdb.org/t/p/original/";
  const { poster_path, name, title, id } = item;
  const slug = slugifyString(title || name);
  const { isShowing, toggle } = useModal();
  const isMovie = movie;

  // method
  function handleClick() {
    fetchMovie(id);
    toggle();
  }

  async function fetchMovie(id) {
    const url = isMovie
      ? `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&append_to_response=videos`
      : `https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.REACT_APP_API_KEY}&append_to_response=videos`;
    await axios.get(url).then((res) => {
      setMedia(res.data);
    });
  }

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
    <>
      {/* <Link
        className={styles.poster}
        to={`overview/${slug}`}
        state={[id, movie]}
      > */}
      <img
        src={`${api_image_url}${poster_path}`}
        alt={name || title}
        className={styles.poster__image}
        onClick={() => handleClick()}
      />
      {/* </Link> */}
      <Modal isShowing={isShowing}>
        <div
          style={{ backgroundColor: "yellow", height: "90vh", width: "100%" }}
        >
          <MediaDetail media={media} />
        </div>
      </Modal>
    </>
  );
}
