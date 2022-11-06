// npm
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";

// files
import { auth } from "../firebase/firebase";
import useAuthContext from "./useAuthContext";

export default function useLogin() {
  // local state
  const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // properties
  const { dispatch } = useAuthContext();
  const navigate = useNavigate();

  async function login(email, password) {
    setError(null);
    setLoading(true);

    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      dispatch({ type: "LOGIN", payload: res.user });
      navigate("/");
      if (!isCancelled) {
        setError(null);
        setLoading(false);
      }
    } catch (err) {
      console.log(err.message);
      setError(err.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);

  return { login, error, loading };
}
