import { auth, facebookProvider, googleProvider } from "@/services/firebase";
import { signInWithPopup, signOut } from "firebase/auth";
import { useDispatch } from "react-redux";
import { signinUsers } from "../profile/userSlice";
import { storage } from "@/lib/storage";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import { socialSignin } from "@/services/authenticationApi";

// 🔹 Normalize user data
const formatUserDetails = (firebaseUser, providerId) => {
    const fullName = firebaseUser.displayName || "";
    const [firstName, ...lastNameParts] = fullName.split(" ");
    const lastName = lastNameParts.join(" ");

    return {
        email: firebaseUser.email,
        firstname: firstName || "",
        lastname: lastName || "",
        username: firebaseUser.displayName || firebaseUser.email?.split("@")[0],
        provider: providerId === "google.com" ? "google" : "facebook",
        providerId: providerId,
        registrationToken: "web",
        deviceId: "abcd",
    };
};

export function useFirebaseAuth() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // 🔹 Social login mutation (shared by Google & Facebook)
    const { mutate: socialLogin } = useMutation({
        mutationFn: socialSignin,
            onSuccess: (data) => {
            toast.success("User successfully logged in");

            console.log(data)

            // Store user & token (assuming API returns them)
            dispatch(signinUsers({ user: data.data.userDetails, token: data.data.token || "" }));
            storage.setUser(data.data.userDetails);
            storage.setToken(data.data.token || '');

            navigate("/");
            },
            onError: (error) => {
            toast.error(error.message || "Login failed");
        },
    });

    // 🔹 Generic social login
    const loginWithProvider = async (provider, providerType) => {
        try {
            const result = await signInWithPopup(auth, provider);
            const firebaseUser = result.user;
            const providerId = firebaseUser.providerData[0]?.providerId || providerType;

            const userDetails = formatUserDetails(firebaseUser, providerId);

            // Trigger API call
            socialLogin(userDetails);
        } catch (error) {
            console.error(`${providerType} login error:`, error);
            toast.error(`${providerType} login failed`);
        }
    };

    // 🔹 Specific logins
    const loginWithGoogle = () => loginWithProvider(googleProvider, "google.com");
    const loginWithFacebook = () => loginWithProvider(facebookProvider, "facebook.com");

    const logout = async () => {
        await signOut(auth);
        storage.clear();
        dispatch(signinUsers(null));
        toast.success("Logged out successfully");
        navigate("/login");
    };

    return { loginWithGoogle, loginWithFacebook, logout };
}
