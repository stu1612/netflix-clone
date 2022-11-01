// npm
import { createContext, useReducer, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";

// files
import { auth } from "../firebase/firebase";

export const AuthContext = createContext();

const ACTIONS = {
  LOGIN: "LOGIN",
  AUTH_IS_READY: "AUTH_IS_READY",
};

export function authReducer(state, action) {
  switch (action.type) {
    case ACTIONS.LOGIN:
      return { ...state, user: action.payload };
    case ACTIONS.LOGOUT:
      return { ...state, user: null };
    case ACTIONS.RESET_PASSWORD:
      return { ...state, user: action.payload };
    case ACTIONS.AUTH_IS_READY:
      return { ...state, user: action.payload, authIsReady: true };
    default:
      return state;
  }
}

export default function AuthContextProvider({ children }) {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
    authIsReady: false,
  });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      dispatch({ type: "AUTH_IS_READY", payload: user });
      unsubscribe();
    });
  }, []);

  console.log("AuthContext state:", state);
  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
}
