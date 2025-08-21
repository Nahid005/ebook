import { auth } from "@/services/firebase"
import { signInWithEmailAndPassword } from "firebase/auth"
import { useState } from "react"

export function useSignin() {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(null);

    const signIn = async (email, password) => {
        setIsLoading(true);
        setIsError(null);

        try {
            const userCredentail = await signInWithEmailAndPassword(auth, email, password)
            const userInfo = userCredentail.user;
            setUser(userInfo);

        }catch(error) {
            console.log(error.message);
            setIsError(error.message);
        }finally {
            setIsLoading(false);
        }
    }

    return {signIn, user, isLoading, isError}
}