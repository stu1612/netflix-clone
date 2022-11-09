// npm
import { Routes, Route } from "react-router-dom";

// files
import Home from "../pages/Home";
import Overview from "../pages/Overview";

export default function LoggedIn() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="overview/:title" element={<Overview />} />
    </Routes>
  );
}
