import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { usePasswordTypeToggled } from "./usePasswordTypeToggled";
import PasswordTypeChange from "./PasswordTypeChange";
import SocialLogin from "./SocialLogin";
import FormValidationError from "@/components/FormValidationError";
import { useSignup } from "./useSignup";
import { useCheckRegisterUser } from "./useCheckRegisterUser";
import Loading from "@/components/Loading";
import Error from "@/components/Error";
import { useDispatch } from "react-redux";
import { signupUsers } from "../profile/userSlice";
import { storage } from "@/lib/storage";

function SignupForm() {
    const dispatch = useDispatch();

    const {verifyUserEmail, isError: isChekRegError, isPending: isCheckRegLoading} = useCheckRegisterUser();
    const {createUser, isError: isCreateUserError, isLoading: isCreateUserLoading} = useSignup();

    const {register, reset, handleSubmit, formState, getValues} = useForm();
    const {errors} = formState;
    const {passwordTextToggle, isShow} = usePasswordTypeToggled();

    if(isCreateUserLoading) return <Loading />
    if(isCreateUserError) return <Error message="Something went wrong" />
    
    function onSubmit(data) {
        const {username, firstname, lastname, email, password} = data;
        const newUser = {
            firstname,
            lastname, 
            username,
            email,
            password
        }
        
        createUser(newUser, {
            onSuccess: () => {
                dispatch(signupUsers(email))
                storage.setEmail(email);
                
                reset();
            }
        })
        
    }

    return (
        <div className="w-full bg-neutral-100 p-8 shadow rounded-md">
            <h4 className="font-bold text-neutral-600 text-xl w-full text-center mb-8 uppercase">Sign Up</h4>
            <form 
                className="grid gap-4 grid-cols-1 md:grid-cols-2  justify-start items-start"
                onSubmit={handleSubmit(onSubmit)}
            >
                
                <div className="flex flex-col w-full gap-2">
                    <label className="text-neutral-600" htmlFor="firstname">First Name</label>
                    <input 
                        className="border border-neutral-300 px-2 py-1 text-sm h-10 rounded"
                        type="text" 
                        name="firstname" 
                        id="firstname"
                        placeholder="Enter First Name"
                        {...register("firstname", {
                            required: "Firstname is required"
                        })}
                        disabled={isCreateUserLoading}
                    />
                    <FormValidationError error={errors?.firstname} />
                </div>
                <div className="flex flex-col w-full gap-2">
                    <label className="text-neutral-600" htmlFor="lastname">Last Name</label>
                    <input 
                        className="border border-neutral-300 px-2 py-1 text-sm h-10 rounded"
                        type="text" 
                        name="lastname" 
                        id="lastname"
                        placeholder="Enter Last Name"
                        {...register("lastname", {
                            required: "Lastname is required"
                        })}
                        disabled={isCreateUserLoading}
                    />
                    <FormValidationError error={errors?.lastname} />
                </div>
                <div className="flex flex-col w-full gap-2">
                    <label className="text-neutral-600" htmlFor="username">Username</label>
                    <input 
                        className="border border-neutral-300 px-2 py-1 text-sm h-10 rounded"
                        aria-invalid={!!errors.username}
                        type="text" 
                        name="username" 
                        id="username"
                        placeholder="User Name"
                        {...register("username", {
                            required: "Username is required"
                        })}
                        disabled={isCreateUserLoading}
                    />
                    <FormValidationError error={errors?.username} />
                </div>
                <div className="flex flex-col w-full gap-2">
                    <label className="text-neutral-600" htmlFor="email">Email</label>
                    <input 
                        className="border border-neutral-300 px-2 py-1 text-sm h-10 rounded"
                        type="email" 
                        name="email" 
                        id="email"
                        placeholder="Enter your email"
                        {...register("email", {
                            required: "Email is required"
                        })}
                        onBlur={() => verifyUserEmail(getValues('email'))}
                        disabled={isCheckRegLoading || isChekRegError}
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
                        disabled={isCreateUserLoading}
                    />
                    <FormValidationError error={errors?.password} />
                    <div 
                        role="button"
                        onClick={() => passwordTextToggle("password")}
                    >
                        <PasswordTypeChange isShow={isShow} />
                    </div>
                </div>
                <div className="flex flex-col w-full gap-2 relative">
                    <label className="text-neutral-600" htmlFor="confirmPassword">Confirm password</label>
                    <input 
                        className="border border-neutral-300 px-2 py-1 text-sm h-10 rounded"
                        type={`${isShow.confirmPassword ? "text" : "password"}`} 
                        name="confirmPassword" 
                        id="confirm-password" 
                        placeholder="Confirm password"
                        {...register("confirmPassword", {
                            required: "Confirm password is required",
                            validate: (value) => value === getValues("password") || "Passwords do not match"
                        })}
                        disabled={isCreateUserLoading}
                    />
                    <FormValidationError error={errors?.confirmPassword} />
                    <div 
                        role="button"
                        onClick={() => passwordTextToggle("confirmPassword") }
                    >
                        <PasswordTypeChange isShow={isShow} />
                    </div>
                </div>

                <input disabled={isCreateUserLoading} className="bg-green-600 w-full py-2 text-md font-bold text-neutral-100 rounded cursor-pointer mt-4" type="submit" value="Sign Up" />
            </form>

            <p className="text-sm font-normal text-neutral-600 my-4">If you have an account please <Link className="font-medium underline" to="/signin">Sign In</Link></p>

            <hr />
            <SocialLogin />
        </div>
    )
}

export default SignupForm;