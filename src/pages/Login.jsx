// npm
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// files
import { Modal } from "../components/Modal";
import useModal from "../hooks/useModal";
import Loader from "../components/Loader";
import useLogin from "../hooks/useLogin";

export default function SignUp() {
  // local state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // properties
  const { error, login } = useLogin();
  const { isShowing, toggle } = useModal();
  const navigate = useNavigate();

  // methods
  function handleSubmit(event) {
    event.preventDefault();
    login(email, password);
    if (email && password) {
      setEmail("");
      setPassword("");
    }
    setTimeout(() => {
      navigate("/");
      toggle();
    }, 1000);

    toggle();
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
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
      <Modal isShowing={isShowing}>
        <Loader />
      </Modal>
      {error && <p>{error}</p>}
    </div>
  );
}
