import { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { app } from '../firebase/firebase.config';

export const AuthContext = createContext(null);
const Auth = ({ children }) => {
    const auth = getAuth(app);
    const [user, setUser] = useState(null);
    const googleProvider = new GoogleAuthProvider();
    const continueWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }
    const createUserWithEmail = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginUserWithEmail = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        return signOut(auth)
    }
    const authInfo = {
        user,
        setUser,
        continueWithGoogle,
        createUserWithEmail,
        loginUserWithEmail,
        logOut
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            setUser(user)
        });
        return () => {
            unsubscribe();
        }
    }, [auth])
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Auth;