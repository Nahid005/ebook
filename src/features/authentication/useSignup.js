import { signUp } from "@/services/authenticationApi";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useSignup() {
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    const {mutate: createUser, isError, isPending}  = useMutation({
        mutationFn: (newUser) => signUp(newUser),
        onSuccess: (data) => {
            queryClient.invalidateQueries({queryKey: ["user"]});
            toast.success("User signup success");

            navigate('/verifyotp')
        },
        onError: (error)=> {
            console.log(error);
            toast.error(error.message)
        } 
    })

    return {createUser, isError, isPending}
}