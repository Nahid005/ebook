import toast from "react-hot-toast";

import { checkRegisterUser } from "@/services/authenticationApi";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export function useCheckRegisterUser() {
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    const {mutate: verifyUserEmail, error, isError, isPending, reset} = useMutation({
        mutationFn: (email) => checkRegisterUser(email),
        onSuccess: (data) => {
            if(data.data.success === 1) {
                toast.error("The email is already exist please login")
                navigate('/signin')
            }

            queryClient.invalidateQueries({queryKey: ['user']})
        },
        onError: (error) => {
            console.log(error)
        }
    }) 

    return {verifyUserEmail, error, isError, isPending, reset}
}