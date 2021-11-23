import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializeFirebaseAuth = () => {
  const app = initializeApp(firebaseConfig);
};

export default initializeFirebaseAuth;
