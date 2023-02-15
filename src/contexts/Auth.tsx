import { createContext, useContext, useEffect, useState } from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from "firebase/auth";

import { signOut, onAuthStateChanged, User } from "firebase/auth";
import { auth, db } from "../firebase";
import { doc, setDoc } from "@firebase/firestore";

type AuthContextType = {
  currentUser: {
    name: string;
    email: string;
    uid: string;
  };
  signUp: ({
    email,
    password,
    name,
  }: {
    email: string;
    password: string;
    name: string;
  }) => void;
  // signIn: () => void;
  logOut: () => void;
  status: string;
};

const AuthContext = createContext<AuthContextType>({
  currentUser: {
    name: "",
    email: "",
    uid: "",
  },
  signUp: () => {},
  // signIn: () => {},
  logOut: () => {},
  status: "",
});

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider(props: any) {
  const [currentUser, setCurrentUser] = useState({
    name: "",
    email: "",
    uid: "",
  });
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState("");

  const provider = new GoogleAuthProvider();

  // async function signIn() {
  //   const auth = getAuth();
  //   signInWithPopup(auth, provider)
  //     .then((result) => {
  //       const credential = GoogleAuthProvider.credentialFromResult(result);
  //       const token = credential!.accessToken;
  //       console.log(token);
  //       setCurrentUser(result.user);
  //       setStatus("success");
  //     })
  //     .catch((error) => {
  //       setStatus(error.message);
  //     });
  // }

  function signUp({
    email,
    password,
    name,
  }: {
    email: string;
    password: string;
    name: string;
  }) {
    console.log("hi")
    console.log(email, password, name)
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password).then(
      (userCredential) => {
        const userRef = doc(db, "users", userCredential.user.uid);

        setDoc(userRef, {
          name: name,
          email: email,
          uid: userCredential.user.uid,
        }).then(() => {
          setCurrentUser({
            name: name,
            email: email,
            uid: userCredential.user.uid,
          });
        });
      }
    );
  }

  function logOut() {
    window.localStorage.clear();
    return signOut(auth);
  }

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (user) => {
  //     if (user !== null) {
  //       setCurrentUser(user);
  //     }
  //     setLoading(false);
  //   });
  //   return unsubscribe;
  // }, []);

  return (
    <AuthContext.Provider
      value={{
        currentUser: currentUser,
        signUp: signUp,
        // signIn: signIn,
        logOut: logOut,
        status: status,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}
