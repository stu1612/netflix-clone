// npm
import { Routes, Route } from "react-router-dom";

// files
import Home from "../pages/Home/Home";

export default function LoggedIn() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}
