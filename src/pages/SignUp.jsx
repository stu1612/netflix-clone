// npm
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// files

import { Modal } from "../components/Modal";
import useModal from "../hooks/useModal";
import Loader from "../components/Loader";

export default function SignUp() {
  // local state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // properties
  // const { isShowing, toggle } = useModal();
  // const navigate = useNavigate();

  // methods
  // function handleSubmit(event) {
  //   event.preventDefault();
  //   signup(email, password);
  //   setTimeout(() => {
  //     // setIsModal('');
  //     navigate("/");
  //   }, 5000);
  //   setIsModal(null);
  // }

  return (
    <div>
      <h1>Sign up</h1>
      <form onSubmit={() => {}}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button>Continue</button>
      </form>
      {/* {error && <p>{error}</p>} */}
    </div>
  );
}
