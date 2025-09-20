import { storage } from "@/lib/storage";
import { signIn } from "@/services/authenticationApi";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export function useSignin() {
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    const {mutate: signinUser, isError, isPending}  = useMutation({
        mutationFn: (userCredentials) => signIn(userCredentials),
        onSuccess: (data) => {

            console.log(data)

            storage.setUser(data.data.userDetails);
            storage.setToken(data.data.token)
            queryClient.invalidateQueries({queryKey: ["signin"]})
            navigate('/')
        },
        onError: (error)=> {
            console.log(error);
        } 
    })

    return {signinUser, isError, isPending}
}