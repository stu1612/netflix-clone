// npm
import { useNavigate } from "react-router-dom";

// files
import useLogout from "../hooks/useLogout";
import { Modal } from "../components/Modal";
import useModal from "../hooks/useModal";
import Loader from "../components/Loader";

export default function Home() {
  const { logout } = useLogout();
  const navigate = useNavigate();

  // methods
  function handleLogout(event) {
    event.preventDefault();
    logout().then(() => {
      navigate("/login");
      window.location.reload();
    });
  }

  return (
    <div>
      Home
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
