import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateProfile } from "firebase/auth";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";

export function useProfileUpdate() {
    const queryClient = useQueryClient();
    const token = useSelector(state => state.user.token)

    const {mutate: profileUpdate, error, isError, isPending, reset} = useMutation({
        mutationFn: (updateInfo) => updateProfile(token, updateInfo),
        onSuccess: (data) => {
            console.log(data)

            queryClient.invalidateQueries({queryKey: ['profileupdate']})
            toast.success("Profile update success")
        },
        onError: (error) => {
            console.log(error.message)
        }
    })

    return {profileUpdate, error, isError, isPending, reset}
}