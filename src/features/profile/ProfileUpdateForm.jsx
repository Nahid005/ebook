import { useForm } from "react-hook-form";
import FormValidationError from "@/components/FormValidationError";
import Loading from "@/components/Loading";
import Error from "@/components/Error";

function ProfileUpdateForm() {

    const {register, reset, handleSubmit, formState, getValues} = useForm();
    const {errors} = formState;
    
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
                reset();
            }
        })
        
    }


    return (
        <div className="w-full bg-neutral-100 p-8 shadow rounded-md">
            <h4 className="font-bold text-neutral-600 text-xl w-full text-center mb-8 uppercase">Profile Update</h4>
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
                    />
                    <FormValidationError error={errors?.email} />
                </div>
                <div className="flex flex-col w-full gap-2 relative">
                    <label className="text-neutral-600" htmlFor="password">Password</label>
                    <input 
                        className="border border-neutral-300 px-2 py-1 text-sm h-10 rounded"
                        type="text"
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
                    />
                    <FormValidationError error={errors?.password} />
                </div>
                <div className="flex flex-col w-full gap-2 relative">
                    <label className="text-neutral-600" htmlFor="confirmPassword">Confirm password</label>
                    <input 
                        className="border border-neutral-300 px-2 py-1 text-sm h-10 rounded"
                        type="text" 
                        name="confirmPassword" 
                        id="confirm-password" 
                        placeholder="Confirm password"
                        {...register("confirmPassword", {
                            required: "Confirm password is required",
                            validate: (value) => value === getValues("password") || "Passwords do not match"
                        })}
                    />
                    <FormValidationError error={errors?.confirmPassword} />
                </div>
                <div className="col-span-2 text-right">
                    <input className=" px-8 w-auto bg-orange-400 py-2 text-md font-bold text-neutral-100 rounded cursor-pointer mt-4" type="submit" value="Profile Update" />
                </div>
            </form>
        </div>
    )
}

export default ProfileUpdateForm;