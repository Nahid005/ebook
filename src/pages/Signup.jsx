import SignupForm from "@/features/authentication/SignupForm";

function Signup() {
    return (
        <div className="h-screen flex flex-col justify-center items-center max-w-sm md:max-w-md mx-auto">
            <SignupForm />
        </div>
    )
}

export default Signup;