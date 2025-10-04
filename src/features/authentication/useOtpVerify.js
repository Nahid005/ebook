import { storage } from "@/lib/storage";
import { verifyOtp } from "@/services/authenticationApi";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { verifyOtpUsers } from "../profile/userSlice";

export function useOtpVerify() {
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const {mutate: otpVerify, error, isError, isPending, reset} = useMutation({
        mutationFn: (otpObj) => verifyOtp(otpObj),
        onSuccess: (data) => {
            if(data.data.success === 1) {
                const {userDetails, token} = data?.data || {};

                if (!userDetails || !token) {
                    toast.error("Invalid response from server");
                    return;
                }

                dispatch(verifyOtpUsers({user: userDetails, token}))
                storage.setUser(userDetails);
                storage.setToken(token);

                toast.success("User successfully created")
                queryClient.invalidateQueries({queryKey: ['otp']})
                navigate('/')
            }
        },
        onError: (error) => {
            toast.error("OTP not match please try again")
            console.log(error)
        }
    })

    return {otpVerify, error, isError, isPending, reset}
} 