import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { app } from "../firebase.config/firebase";
export const AuthContext = createContext(null);
const auth = getAuth(app);
export default function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(null);
    const Googleprovider = new GoogleAuthProvider();

  const CreateUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const Login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const LogOut=()=>{
    return signOut(auth)
  }

  const GoggleLogIn = ()=>{
    signInWithPopup(auth, Googleprovider)
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setLoading(false);
      setUser(currentUser);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo ={
    user,
    loading,
    CreateUser,
    Login,
    LogOut,
    GoggleLogIn
  }
  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
}
