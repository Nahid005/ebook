import { Link } from "react-router-dom";
import SocialLogin from "./SocialLogin";
import { usePasswordTypeToggled } from "./usePasswordTypeToggled";
import FormValidationError from "@/components/FormValidationError";
import PasswordTypeChange from "./PasswordTypeChange";
import { useForm } from "react-hook-form";
import { useSignin } from "./useSignin";

function SigninForm() {
    const {register, reset, handleSubmit, formState} = useForm();
    const {errors} = formState;
    const {passwordTextToggle, isShow} = usePasswordTypeToggled();
    const {signIn, user, isError, isLoading} = useSignin();

    console.log(user);

    function onSubmit(data) {
        const {email, password} = data;
        signIn(email, password)

        reset();
    }

    return (
        <div className="w-full bg-neutral-100 p-8 shadow rounded-md">
            <h4 className="font-bold text-neutral-600 text-xl w-full text-center mb-8 uppercase">Sign In</h4>
            <form 
                className="flex flex-col gap-4 justify-start items-start"
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className="flex flex-col w-full gap-2">
                    <label className="text-neutral-600" htmlFor="email">Email</label>
                    <input 
                        className="border border-neutral-300 px-2 py-1 text-sm h-10 rounded"
                        type="email" 
                        name="email" 
                        id="email"
                        defaultValue="example@gmail.com"
                        placeholder="Enter your email"
                        {...register("email", {
                            required: "Email is required"
                        })}
                        disabled={isLoading}
                    />
                    <FormValidationError error={errors?.email} />
                </div>
                <div className="flex flex-col w-full gap-2 relative">
                    <label className="text-neutral-600" htmlFor="password">Password</label>
                    <input 
                        className="border border-neutral-300 px-2 py-1 text-sm h-10 rounded"
                        type={`${isShow.password ? "text" : "password"}`}
                        name="password" 
                        id="password" 
                        placeholder="Enter your password"
                        {...register("password", {
                            required: "Password is required",
                            minLength: {
                                value: 8,
                                message: "Password must be at least 8 characters"
                            }
                        })}
                        disabled={isLoading}
                    />
                    <FormValidationError error={errors?.password} />
                    <div 
                        onClick={() => passwordTextToggle("password")}
                    >
                        <PasswordTypeChange isShow={isShow} />
                    </div>
                </div>

                <input disabled={isLoading} className="bg-green-600 w-full py-2 text-md font-bold text-neutral-100 rounded cursor-pointer mt-4" type="submit" value="Sign In" />
            </form>

            <p className="text-sm font-normal text-neutral-600 my-4">If you don't have an account plese <Link className="font-medium underline" to="/signup">Signup</Link></p>

            <hr />
            <SocialLogin />
        </div>
    )
}

export default SigninForm;