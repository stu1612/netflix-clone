// npm
import { Link } from "react-router-dom";

export default function Welcome() {
  return (
    <div>
      <h1>Welcome</h1>
      <Link to={"/signup"}>Signup</Link>
      <br />
      <Link to={"/login"}>Login</Link>
    </div>
  );
}
