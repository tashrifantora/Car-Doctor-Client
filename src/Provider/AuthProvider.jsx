import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../Firebase/firebase.config'
import axios from "axios";

export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    // Create USer by email and password
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)

    }

    // Sign in with email and pass
    const logIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }


    // Log out 
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            const userEmail = currentUser?.email || user?.email;

            const loggedUser = { email: userEmail };

            setUser(currentUser);
            console.log("current user", currentUser)
            setLoading(false)

            // if user exists than issue a ***TOKEN***
            if (currentUser) {

                axios.post('https://car-doctor-server-six-sable.vercel.app/jwt', loggedUser, { withCredentials: true })
                    .then(res => console.log('token response', res.data))
            }

            else {
                axios.post('https://car-doctor-server-six-sable.vercel.app/logout', loggedUser, { withCredentials: true })
                    .then(res => console.log(res.data))
            }
        })
        return () => {
            return unSubscribe();
        }
    }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        logIn,
        logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;