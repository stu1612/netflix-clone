// files
import useLogout from "../hooks/useLogout";
import Navbar from "../components/Navbar";

export default function Home() {
  const { logout, error } = useLogout();

  // methods
  function handleLogout() {
    logout();
    setTimeout(() => {
      window.location.reload();
    }, 1000);
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
      {error && <small className="error">{error}</small>}

      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
