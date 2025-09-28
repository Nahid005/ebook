import toast from "react-hot-toast";
import { storage } from "@/lib/storage";
import { signOut } from "@/services/authenticationApi";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signoutUsers } from "../profile/userSlice";

export function useSignout() {
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const token = useSelector(state => state.user.token)

    const {mutate: signoutUser, error, isError, isPending, reset}  = useMutation({
        mutationFn: (userCredentials) => signOut(userCredentials, token),
        onSuccess: () => {
            dispatch(signoutUsers());
            storage.clearAll();
            queryClient.clear();

            toast.success("User successfully signout");
            navigate('/');
        },
        onError: (error)=> {
            const message = error?.response?.data?.message || error?.message || "Signout failed";
            console.error("Signout error:", message);
            toast.error(message);
        } 
    })

    return {signoutUser, error, isError, isPending, reset}
}