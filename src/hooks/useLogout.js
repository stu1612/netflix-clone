// npm
import { useState, useEffect } from "react";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

// files
import { auth } from "../firebase/firebase";
import useAuthContext from "./useAuthContext";

export default function useLogout() {
  // local state
  const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState(null);

  // global state
  const { dispatch } = useAuthContext();

  // properties
  const navigate = useNavigate();

  async function logout() {
    setError(null);

    try {
      await signOut(auth).then(() => {
        dispatch({ type: "LOGOUT" });
        navigate("/signin");
      });
      if (!isCancelled) {
        setError(null);
      }
    } catch (err) {
      if (!isCancelled) {
        setError(err.message);
        console.error(err.message);
      }
    }
  }

  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);

  return { logout, error };
}
