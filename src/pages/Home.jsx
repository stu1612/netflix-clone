// files
import useLogout from "../hooks/useLogout";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import { apiRequests } from "../apiRequests";
import Movies from "../components/Movies";

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
      <Banner />
      <Movies fetchUrl={apiRequests.fetchTest} />

      {error && <small className="error">{error}</small>}

      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
