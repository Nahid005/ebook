import { storage } from "@/lib/storage";
import { signOut } from "@/services/authenticationApi";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useSignout() {
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    const {mutate: signoutUser, isError, isPending}  = useMutation({
        mutationFn: (userCredentials) => signOut(userCredentials),
        onSuccess: (data) => {
            storage.clearAll();
            queryClient.invalidateQueries({queryKey: ["signout"]});
            toast.success("User signout successfully");
            
            navigate('/')
        },
        onError: (error)=> {
            console.log(error);
        } 
    })

    return {signoutUser, isError, isPending}
}