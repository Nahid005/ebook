import { auth } from "@/services/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";

export function useSignup() {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(null);
 
    const signUp = async (email, password) => {
        setIsLoading(true);
        setIsError(null);

        try {
            const userCredentail = await createUserWithEmailAndPassword(auth, email, password);
            const userInfo = userCredentail.user;
            setUser(userInfo);
        } catch(error) {
            console.log(error.message)
            setIsError(error.message);
        } finally {
            setIsLoading(false)
        }
    }

    return {signUp, user, isError, isLoading}
}