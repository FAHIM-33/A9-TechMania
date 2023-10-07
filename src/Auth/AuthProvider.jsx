import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile } from "firebase/auth";
import auth from "../firebase.config";
import pt from 'prop-types'
import { createContext, useEffect, useState } from "react";
export const AuthContext = createContext({})
const AuthProvider = ({children}) => {
    let [user, setUser] = useState(null)
    const createUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const login = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut =()=>{
        return signOut(auth)
    }
    const update =(name)=>{
        return updateProfile(auth.currentUser,{
            displayName: name,
        })
    }



    useEffect(()=>{
        let unSubscribe = onAuthStateChanged(auth, (person)=>{
            setUser(person)  
        })
        return ()=>unSubscribe();
    },[])



    let data = {
        createUser,
        login,
        user,
        logOut,
        update,

    }

    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
        );

};
AuthProvider.propTypes = {
    children:pt.node,
}

export default AuthProvider;