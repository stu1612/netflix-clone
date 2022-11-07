// files
import { Modal } from "../components/Modal";
import Loader from "../components/Loader";

export default function LoadingModal({ isShowing }) {
  return (
    <Modal isShowing={isShowing}>
      <Loader />
    </Modal>
  );
}
