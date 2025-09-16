import { verifyOtp } from "@/services/authenticationApi";
import { useMutation } from "@tanstack/react-query";

export function useOtpVerify() {
    const {mutate: otpVerify, isPending, isError} = useMutation({
        mutationFn: (otpObj) => verifyOtp(otpObj),
        onSuccess: (data) => {
            console.log(data)
        },
        onError: (error) => {
            console.log(error)
        }
    })

    return {otpVerify, isPending, isError}
} 