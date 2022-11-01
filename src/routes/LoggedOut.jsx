// npm
import { Routes, Route } from "react-router-dom";

// files
import Welcome from "../pages/Welcome/Welcome";
import SignUp from "../pages/SignUp/SignUp";

export default function LoggedOut() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="signup" element={<SignUp />} />
    </Routes>
  );
}
