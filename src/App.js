// npm
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// files
import Home from "./pages/Home/Home";
import Welcome from "./pages/Welcome/Welcome";

function App() {
  const user = "";
  return (
    <div className="App">
      <Router>
        <Routes>
          {!user && <Route path="/" element={<Welcome />} />}
          {user && <Route path="/" element={<Home />} />}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
