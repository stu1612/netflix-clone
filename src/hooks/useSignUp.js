// npm
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

// files
import { auth } from "../firebase/firebase";
import useAuthContext from "./useAuthContext";

export default function useSignUp() {
  // local state
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // properties
  const { dispatch } = useAuthContext();
  const navigate = useNavigate();

  const signup = async (email, password) => {
    setError(null);
    try {
      setLoading(true);
      const res = await createUserWithEmailAndPassword(auth, email, password);
      dispatch({ type: "LOGIN", payload: res.user });
      navigate("/");
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  return { signup, error, loading };
}
