// npm
import { Routes, Route } from "react-router-dom";

// files
import Welcome from "../pages/Welcome";
import Register from "../pages/RegisterAccount";
import Login from "../pages/Login";

export default function LoggedOut() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="registration" element={<Register />} />
      <Route path="signin" element={<Login />} />
    </Routes>
  );
}
