import { createContext, useContext, useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import { signOut, onAuthStateChanged, User } from "firebase/auth";
import { auth } from "../firebase";

type AuthContextType = {
  currentUser: User | null | undefined;
  signIn: () => void;
  logOut: () => void;
  status: string;
};

const AuthContext = createContext<AuthContextType>({
  currentUser: undefined,
  signIn: () => {},
  logOut: () => {},
  status: "",
});

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider(props: any) {
  const [currentUser, setCurrentUser] = useState<User>();
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState("");

  const provider = new GoogleAuthProvider();

  async function signIn() {
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential!.accessToken;
        console.log(token);
        setCurrentUser(result.user);
        setStatus("success");
      })
      .catch((error) => {
        setStatus(error.message);
      });
  }

  function logOut() {
    window.localStorage.clear();
    return signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user !== null) {
        setCurrentUser(user);
      }
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider
      value={{
        currentUser: currentUser,
        signIn: signIn,
        logOut: logOut,
        status: status,
      }}
    >
      {!loading && props.children}
    </AuthContext.Provider>
  );
}
