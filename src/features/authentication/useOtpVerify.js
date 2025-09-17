import { storage } from "@/lib/storage";
import { verifyOtp } from "@/services/authenticationApi";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export function useOtpVerify() {
    const navigate = useNavigate();

    const {mutate: otpVerify, isPending, isError} = useMutation({
        mutationFn: (otpObj) => verifyOtp(otpObj),
        onSuccess: (data) => {

            console.log(data.data.success)

            if(data.data.success === 1) {
                storage.setUser(data.data.userDetails);
                storage.setToken(data.data.token)

                navigate('/')
            }
        },
        onError: (error) => {
            console.log(error)
        }
    })

    return {otpVerify, isPending, isError}
} 