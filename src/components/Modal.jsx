// npm
import ReactDOM from "react-dom";

// files
import styles from "../styles/Modal.module.css";

export const Modal = ({ isShowing, children }) =>
  isShowing
    ? ReactDOM.createPortal(
        <div className={styles.modal_bg}>
          <div
            className={styles.modal_wrapper}
            aria-modal
            aria-hidden
            tabIndex={-1}
            role="dialog"
          >
            <div className={styles.modal}>{children}</div>
          </div>
        </div>,
        document.getElementById("portal")
      )
    : null;
