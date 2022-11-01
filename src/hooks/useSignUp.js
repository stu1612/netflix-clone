// npm
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";

// files
import { auth } from "../firebase/firebase";
import useAuthContext from "./useAuthContext";

export default function useSignUp() {
  // local state
  const [error, setError] = useState(null);

  // properties
  const { dispatch } = useAuthContext();
  const signup = async (email, password) => {
    setError(null);
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      dispatch({ type: "LOGIN", payload: res.user });
    } catch (err) {
      setError(err.message);
    }
  };

  return { error, signup };
}
