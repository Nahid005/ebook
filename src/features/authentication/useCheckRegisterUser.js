import { checkRegisterUser } from "@/services/authenticationApi";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useCheckRegisterUser() {
    const navigate = useNavigate();
    const queryClient = useQueryClient()

    const {mutate: verifyUserEmail, isPending, isError} = useMutation({
        mutationFn: (email) => checkRegisterUser(email),
        onSuccess: (data) => {
            if(data.data.success === 1) {
                toast.error("The email is already exist please login")
                navigate('/signin')
            }

            queryClient.invalidateQueries({queryKey: ['users']})
        },
        onError: (error) => {
            console.log(error)
        }
    }) 

    return {verifyUserEmail, isPending, isError}
}