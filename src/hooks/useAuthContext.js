// npm
import { useContext } from "react";

// files
import { AuthContext } from "../contexts/AuthContext";

export default function useAuthContext() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("Wrap provider around child components");
  }
  return context;
}
