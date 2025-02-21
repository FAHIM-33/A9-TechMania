import {GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile } from "firebase/auth";

import auth from "../firebase.config";
import pt from 'prop-types'
import { createContext, useEffect, useState } from "react";
export const AuthContext = createContext({})



const AuthProvider = ({ children }) => {
    let goProvider = new GoogleAuthProvider();
    let [user, setUser] = useState(null)
    let [loading, setLoading] = useState(true)
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const login = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        return signOut(auth)
    }
    const googleLogin = () => {
        return signInWithPopup(auth,goProvider)
    }



    const update = (name,url) => {
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: url,
        })
    }



    useEffect(() => {
        let unSubscribe = onAuthStateChanged(auth, (person) => {
            setUser(person)
            setLoading(false)
        })
        return () => unSubscribe();
    }, [])



    let data = {
        createUser,
        login,
        user,
        logOut,
        update,
        loading,
        googleLogin,

    }

    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    );

};
AuthProvider.propTypes = {
    children: pt.node,
}

export default AuthProvider;