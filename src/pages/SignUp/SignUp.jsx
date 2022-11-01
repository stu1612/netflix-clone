// npm
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// files
import useSignUp from "../../hooks/useSignUp";

export default function SignUp() {
  // local state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(null);

  // properties
  const { error, signup } = useSignUp();
  const navigate = useNavigate();

  // methods
  function handleSubmit(event) {
    event.preventDefault();
    signup(email, password);
    setTimeout(() => {
      setLoading("Loading");
    }, 500);
    setLoading(null);
  }
  return (
    <div>
      <h1>Sign up</h1>
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
      {error && <p>{error}</p>}
      {loading && <p>{loading}</p>}
    </div>
  );
}
