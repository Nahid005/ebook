import { useForm } from "react-hook-form";
import FormValidationError from "@/components/FormValidationError";
import Loading from "@/components/Loading";
import Error from "@/components/Error";

function SettingUpdateForm() {

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
        <div className="w-full bg-neutral-100 p-8 shadow rounded-md md:m-0 my-4">
            <h4 className="font-bold text-neutral-600 text-xl w-full text-center mb-8 uppercase">Change Password</h4>
            <form 
                className="md:grid gap-4 grid-cols-1 md:grid-cols-2  justify-start items-start"
                onSubmit={handleSubmit(onSubmit)}
            >
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
                <div className="col-span-2 text-right">
                    <input className=" px-8 w-auto bg-orange-400 py-2 text-md font-bold text-neutral-100 rounded cursor-pointer mt-4" type="submit" value="Setting Update" />
                </div>
            </form>
        </div>
    )
}

export default SettingUpdateForm;