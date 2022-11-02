// npm
import { BrowserRouter as Router } from "react-router-dom";

// files
import LoggedIn from "./routes/LoggedIn";
import LoggedOut from "./routes/LoggedOut";

import useAuthContext from "./hooks/useAuthContext";
import "./App.css";

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
