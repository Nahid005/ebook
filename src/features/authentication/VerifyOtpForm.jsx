import FormValidationError from "@/components/FormValidationError";
import { useForm } from "react-hook-form";
import { useOtpVerify } from "./useOtpVerify";
import Error from "@/components/Error";
import { useSelector } from "react-redux";

function VerifyOtpForm() {
    const {otpVerify, isError, isPending} = useOtpVerify();
    const email = useSelector(state => state.user.email)

    if(isError) return <Error message="Something went wrong" />

    const {register, reset, handleSubmit, formState} = useForm();
    const {errors} = formState;

    function onSubmit({otp}) {
        const otpObj = {
            email,
            otp
        }
        otpVerify(otpObj, {
            onSuccess: () => {
                reset();
            }
        })
    }
    
    return (
        <div className="w-full bg-neutral-100 p-8 shadow rounded-md">
            <h4 className="font-bold text-neutral-600 text-xl w-full text-center mb-8 uppercase">Verify OTP</h4>
            <form 
                className="flex flex-col gap-4 justify-start items-start"
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className="flex flex-col w-full gap-2 relative">
                    <label className="text-neutral-600" htmlFor="otp">OTP</label>
                    <input 
                        className="border border-neutral-300 px-2 py-1 text-sm h-10 rounded"
                        type="text"
                        name="otp" 
                        id="otp" 
                        placeholder="Enter OTP"
                        {...register("otp", {
                            required: "OTP is required"
                        })}
                    />
                    <FormValidationError error={errors?.otp} />
                </div>

                <input 
                    className={`bg-green-600 w-full py-2 text-md font-bold text-neutral-100 rounded ${isPending ? 'cursor-not-allowed' : 'cursor-pointer'} mt-4`} 
                    disabled={isPending}
                    type="submit" value="Verify OTP" />
            </form>
        </div>
    )
}

export default VerifyOtpForm;