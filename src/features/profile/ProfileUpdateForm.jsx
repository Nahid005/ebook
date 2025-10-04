import { useForm } from "react-hook-form";
import Loading from "@/components/Loading";
import Error from "@/components/Error";
import { useSelector } from "react-redux";
import { useProfileUpdate } from "./useProfileUpdate";

function ProfileUpdateForm() {
    const {profileUpdate, error, isError, isPending, reset: profileReset} = useProfileUpdate();

    const {register, reset, handleSubmit, formState} = useForm();
    const {errors} = formState;
    const {id, firstname, lastname, username, email} = useSelector(state => state.user.user);

    if(isPending) return <Loading />
    if(isError) return <Error error={error} reset={profileReset} />

    function onSubmit(data) {
        const {username, firstname, lastname, email} = data;
        const updateInfo = {
            id: id,
            firstname: firstname,
            lastname: lastname,
            country_code: "",
            phone: "",
            image: "",
        }
        
        profileUpdate(updateInfo, {
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
                        defaultValue={firstname}
                        placeholder="Enter First Name"
                        {...register("firstname")}
                    />
                </div>
                <div className="flex flex-col w-full gap-2">
                    <label className="text-neutral-600" htmlFor="lastname">Last Name</label>
                    <input 
                        className="border border-neutral-300 px-2 py-1 text-sm h-10 rounded"
                        type="text" 
                        name="lastname" 
                        id="lastname"
                        defaultValue={lastname}
                        placeholder="Enter Last Name"
                        {...register("lastname")}
                    />
                </div>
                <div className="flex flex-col w-full gap-2">
                    <label className="text-neutral-600" htmlFor="username">Username</label>
                    <input 
                        className="border border-neutral-300 px-2 py-1 text-sm h-10 rounded"
                        aria-invalid={!!errors.username}
                        type="text" 
                        name="username" 
                        id="username"
                        defaultValue={username}
                        readOnly
                        placeholder="User Name"
                        {...register("username")}
                    />
                </div>
                <div className="flex flex-col w-full gap-2">
                    <label className="text-neutral-600" htmlFor="email">Email</label>
                    <input 
                        className="border border-neutral-300 px-2 py-1 text-sm h-10 rounded"
                        type="email" 
                        name="email" 
                        id="email"
                        defaultValue={email}
                        readOnly
                        placeholder="Enter your email"
                        {...register("email")}
                    />
                </div>
                
                <div className="col-span-2 text-right">
                    <input className=" px-8 w-auto bg-orange-400 py-2 text-md font-bold text-neutral-100 rounded cursor-pointer mt-4" type="submit" value="Profile Update" />
                </div>
            </form>
        </div>
    )
}

export default ProfileUpdateForm;