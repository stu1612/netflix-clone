// npm
import { Routes, Route } from "react-router-dom";

// files
import Home from "../pages/Home";

export default function LoggedIn() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}
