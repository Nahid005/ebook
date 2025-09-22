import { signOut } from "@/services/authenticationApi";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export function useSignout() {
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    const {mutate: signoutUser, isError, isPending}  = useMutation({
        mutationFn: (userCredentials) => signOut(userCredentials),
        onSuccess: (data) => {
            queryClient.invalidateQueries({queryKey: ["user"]})
            navigate('/')
        },
        onError: (error)=> {
            console.log(error);
        } 
    })

    return {signoutUser, isError, isPending}
}