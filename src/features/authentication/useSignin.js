import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signIn } from "@/services/authenticationApi";
import { signinUsers } from "../profile/userSlice";
import { storage } from "@/lib/storage";

export function useSignin() {
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const {mutate: signinUser, isError, isPending}  = useMutation({
        mutationFn: (userCredentials) => signIn(userCredentials),
        onSuccess: (data) => {
            const {userDetails, token} = data?.data || {};

            if (!userDetails || !token) {
                toast.error("Invalid response from server");
                return;
            }

            dispatch(signinUsers({user: userDetails, token}));
            storage.setUser(userDetails);
            storage.setToken(token);

            queryClient.invalidateQueries({queryKey: ["user"]});
            toast.success("User signin successfully");
            navigate('/')
        },
        onError: (error)=> {
            console.log(error);
            toast.error(error.message)
        } 
    })

    return {signinUser, isError, isPending}
}