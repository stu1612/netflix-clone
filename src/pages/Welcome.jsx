// npm
import { Link } from "react-router-dom";

// files
import { Modal } from "../components/Modal";
import useModal from "../hooks/useModal";
import Loader from "../components/Loader";

export default function Welcome() {
  const { isShowing, toggle } = useModal();

  // function handleNav() {
  //   setTimeout(() => {
  //     toggle();
  //     navigate("/signup");
  //   }, 3000);
  //   toggle();
  // }

  return (
    <div>
      <h1>Welcome</h1>
      <Link to={"/signup"}>Signup</Link>

      {/* <Modal isShowing={isShowing} hide={toggle}> */}
      <Modal isShowing={isShowing}>
        <Loader />
      </Modal>
    </div>
  );
}
