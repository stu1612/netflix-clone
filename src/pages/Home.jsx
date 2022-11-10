import { useState } from "react";

// files
import useLogout from "../hooks/useLogout";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import { apiRequests } from "../apiRequests";
import Media from "../components/Media";

export default function Home() {
  const { logout, error } = useLogout();
  const [movie] = useState(true);

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
      <Media
        title="Trending Now"
        fetchUrl={apiRequests.fetchTrending}
        movie={movie}
      />
      {/* <Movies title="Top Rated" fetchUrl={apiRequests.fetchTopRated} /> */}
      <Media title="Top TV" fetchUrl={apiRequests.fetchTV} movie={!movie} />

      {error && <small className="error">{error}</small>}

      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
