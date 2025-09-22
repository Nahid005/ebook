import { storage } from "@/lib/storage";
import { verifyOtp } from "@/services/authenticationApi";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useOtpVerify() {
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    const {mutate: otpVerify, isPending, isError} = useMutation({
        mutationFn: (otpObj) => verifyOtp(otpObj),
        onSuccess: (data) => {
            if(data.data.success === 1) {
                storage.setUser(data.data.userDetails);
                storage.setToken(data.data.token)
                toast.success("User successfully created")

                queryClient.invalidateQueries({queryKey: ['user']})
                navigate('/')
            }
        },
        onError: (error) => {
            toast.error("OTP not match please try again")
            console.log(error)
        }
    })

    return {otpVerify, isPending, isError}
} 