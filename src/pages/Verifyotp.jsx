import VerifyOtpForm from "@/features/authentication/VerifyOtpForm";

function Verifyotp() {
    return(
        <div className="h-screen flex flex-col justify-center items-center max-w-sm md:max-w-md mx-auto">
            <VerifyOtpForm />
        </div>
    )
}

export default Verifyotp;