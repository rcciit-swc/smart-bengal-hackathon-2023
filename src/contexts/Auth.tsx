import { createContext, useContext, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { signOut } from "firebase/auth";
import { auth, db } from "../firebase";
import { doc, setDoc } from "@firebase/firestore";

type UserType = {
  name: string;
  email: string;
  uid: string;
} | null;

type AuthContextType = {
  currentUser: {
    name: string;
    email: string;
    uid: string;
  } | null;
  signUp: ({
    email,
    password,
    name,
  }: {
    email: string;
    password: string;
    name: string;
  }) => void;
  login: ({ email, password }: { email: string; password: string }) => void;
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
  login: () => {},
  logOut: () => {},
  status: "",
});

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider(props: any) {
  const [currentUser, setCurrentUser] = useState<UserType>(null);
  const [status, setStatus] = useState("");

  // const provider = new GoogleAuthProvider();

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

  function login({ email, password }: { email: string; password: string }) {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setCurrentUser({
          name: "",
          email: email,
          uid: userCredential.user.uid,
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  }

  function logOut() {
    window.localStorage.clear();
    signOut(auth)
      .then(() => {
        setCurrentUser(null);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <AuthContext.Provider
      value={{
        currentUser: currentUser,
        signUp: signUp,
        login: login,
        logOut: logOut,
        status: status,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}
