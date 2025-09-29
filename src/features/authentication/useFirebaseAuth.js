import { auth, facebookProvider, googleProvider } from "@/services/firebase"
import { signInWithPopup, signOut } from "firebase/auth"
import { useDispatch } from "react-redux";
import { signinUsers } from "../profile/userSlice";
import { storage } from "@/lib/storage";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useFirebaseAuth() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const loginWithGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            const userId = result.user.uid;
            const userDetails = {
                email: result.user?.email,
                name: result.user?.displayName,
                image: result.user?.photoURL
            };
            const token = result.user.accessToken

            if(userId) {
                toast.success("User successfully login")
            }

            dispatch(signinUsers({user: userDetails, token}));
            storage.setUser(userDetails);
            storage.setToken(token);

            navigate('/')
        } catch(error) {
            console.log(error)
        }
    }

    const loginWithFacebook = async () => {
        try {
            const result = await signInWithPopup(auth, facebookProvider);
            const userId = result.user.uid;
            const userDetails = {
                email: result.user?.email,
                name: result.user?.displayName,
                image: result.user?.photoURL
            };
            const token = result.user.accessToken

            if(userId) {
                toast.success("User successfully login")
            }

            dispatch(signinUsers({user: userDetails, token}));
            storage.setUser(userDetails);
            storage.setToken(token);

            navigate('/')
        } catch(error) {
            console.log(error)
        }
    }

    const logout  = async () => {
        await signOut(auth)
    }

    return {loginWithFacebook, loginWithGoogle, logout}
}