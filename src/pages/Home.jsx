// npm
import { useNavigate } from "react-router-dom";

// files
import useLogout from "../hooks/useLogout";
import { Modal } from "../components/Modal";
import useModal from "../hooks/useModal";
import Loader from "../components/Loader";
import Navbar from "../components/Navbar";

export default function Home() {
  const { logout } = useLogout();
  const navigate = useNavigate();

  // methods
  function handleLogout(event) {
    event.preventDefault();
    logout().then(() => {
      navigate("/signin");
      window.location.reload();
    });
  }

  return (
    <div>
      <Navbar />
      <h1 style={{ fontSize: "8rem", color: "white" }}>hello</h1>
      <h1 style={{ fontSize: "8rem", color: "white" }}>hello</h1>
      <h1 style={{ fontSize: "8rem", color: "white" }}>hello</h1>
      <h1 style={{ fontSize: "8rem", color: "white" }}>hello</h1>
      <h1 style={{ fontSize: "8rem", color: "white" }}>hello</h1>
      <h1 style={{ fontSize: "8rem", color: "white" }}>hello</h1>
      <h1 style={{ fontSize: "8rem", color: "white" }}>hello</h1>
      <h1 style={{ fontSize: "8rem", color: "white" }}>hello</h1>
      <h1 style={{ fontSize: "8rem", color: "white" }}>hello</h1>
      <h1 style={{ fontSize: "8rem", color: "white" }}>hello</h1>
      <h1 style={{ fontSize: "8rem", color: "white" }}>hello</h1>
      <h1 style={{ fontSize: "8rem", color: "white" }}>hello</h1>
      <h1 style={{ fontSize: "8rem", color: "white" }}>hello</h1>
      <h1 style={{ fontSize: "8rem", color: "white" }}>hello</h1>
      <h1 style={{ fontSize: "8rem", color: "white" }}>hello</h1>
      <h1 style={{ fontSize: "8rem", color: "white" }}>hello</h1>
      <h1 style={{ fontSize: "8rem", color: "white" }}>hello</h1>
      <h1 style={{ fontSize: "8rem", color: "white" }}>hello</h1>
      <h1 style={{ fontSize: "8rem", color: "white" }}>hello</h1>

      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
