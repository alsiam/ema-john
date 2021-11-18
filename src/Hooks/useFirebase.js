import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import initializeFirebaseAuth from "../firebase/firebase.init";

initializeFirebaseAuth();

const useFirebase = () => {
  //State Declareation
  const [user, setUser] = useState({});
  const [error, setError] = useState({});

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const googleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorCode);
      });
  };
  return {
    googleSignIn,
    user,
    error,
  };
};

export default useFirebase;
