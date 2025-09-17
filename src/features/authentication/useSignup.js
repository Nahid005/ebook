import { signUp } from "@/services/authenticationApi";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export function useSignup() {
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    const {mutate: createUser, isError, isPending}  = useMutation({
        mutationFn: (newUser) => signUp(newUser),
        onSuccess: (data) => {

            console.log("user Info", data)

            queryClient.invalidateQueries({queryKey: ["users"]})

            navigate('/verifyotp')
        },
        onError: (error)=> {
            console.log(error);
        } 
    })

    

    return {createUser, isError, isPending}
}