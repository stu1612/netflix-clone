// npm
import { BrowserRouter as Router } from "react-router-dom";

// files
import LoggedIn from "./routes/LoggedIn";
import LoggedOut from "./routes/LoggedOut";
import useAuthContext from "./hooks/useAuthContext";
import "./App.css";

// fonts
import "./assets/fonts/NetflixSansBlack.ttf";
import "./assets/fonts/NetflixSansBold.ttf";
import "./assets/fonts/NetflixSansLight.ttf";
import "./assets/fonts/NetflixSansMedium.ttf";
import "./assets/fonts/NetflixSansRegular.ttf";
import "./assets/fonts/NetflixSansThin.ttf";

function App() {
  // properties
  const { user, authIsReady } = useAuthContext();

  return (
    <div className="App">
      {authIsReady && <Router>{!user ? <LoggedOut /> : <LoggedIn />}</Router>}
    </div>
  );
}

export default App;
