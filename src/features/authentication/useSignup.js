import { signUp } from "@/services/authenticationApi";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

export function useSignup() {
    const [user, setUser] = useState(null);
    const queryClient = useQueryClient();

    const {mutate: userMutation, isError, isPending}  = useMutation({
        mutationFn: (newUser) => signUp(newUser),
        onSuccess: (user) => {
            setUser(user)
            console.log(user.data)
            queryClient.invalidateQueries({queryKey: ["user"]})
        },
        onError: (error)=> {
            console.log(error);
        } 
    })

    

    return {userMutation, isError, isPending}
}