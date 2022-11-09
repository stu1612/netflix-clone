// npm
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// files
import styles from "../styles/Movies.module.css";
import useModal from "../hooks/useModal";

import { Modal } from "../components/Modal";
import MovieDetail from "../components/MovieDetail";

export default function MovieCard({ movie }) {
  // properties
  const api_image_url = "https://image.tmdb.org/t/p/original/";
  const { isShowing, toggle } = useModal();

  const { poster_path, name, title, id } = movie;

  function onClickHandler() {
    toggle();
  }

  return (
    <>
      <div className={styles.poster}>
        <img
          src={`${api_image_url}${poster_path}`}
          alt={name || title}
          className={styles.poster__image}
          onClick={onClickHandler}
        />
      </div>
      <Modal isShowing={isShowing}>
        <MovieDetail id={id} />
      </Modal>
    </>
  );
}
