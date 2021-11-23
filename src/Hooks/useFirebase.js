import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
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
      })
      .catch((error) => {
        // Handle Errors here.
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    });
  }, []);

  const logout = () => {
    signOut(auth).then(() => {
        setUser({})
    });
  };
  return {
    user,
    error,
    googleSignIn,
    logout
  };
};

export default useFirebase;
