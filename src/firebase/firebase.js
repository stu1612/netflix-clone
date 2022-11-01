import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCgoalxEbDVo2CAfdoZd1Skn5b5t9bll5o",
  authDomain: "app-clone-netflix.firebaseapp.com",
  projectId: "app-clone-netflix",
  storageBucket: "app-clone-netflix.appspot.com",
  messagingSenderId: "420629627605",
  appId: "1:420629627605:web:891a05b855ed277e3ad85c",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
