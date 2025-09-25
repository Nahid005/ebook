import { storage } from "@/lib/storage";
import { signOut } from "@/services/authenticationApi";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signoutUsers } from "../profile/userSlice";

export function useSignout() {
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const token = useSelector(state => state.user.token)

    const {mutate: signoutUser, isError, isPending}  = useMutation({
        mutationFn: (userCredentials) => signOut(userCredentials, token),
        onSuccess: (data) => {
            dispatch(signoutUsers())

            storage.clearAll();

            queryClient.invalidateQueries({queryKey: ["user"]});

            toast.success("User signout successfully");
            navigate('/')
        },
        onError: (error)=> {
            console.log(error);
        } 
    })

    return {signoutUser, isError, isPending}
}