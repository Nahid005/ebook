import { useForm } from "react-hook-form";
import FormValidationError from "@/components/FormValidationError";

function ContactForm() {

    const {register, reset, handleSubmit, formState, getValues} = useForm();
    const {errors} = formState;
    
    function onSubmit(data) {
        const {firstname, email, phone, location, description} = data;
        const newUser = {
            firstname,
            email,
            phone,
            location,
            description
        }
        
        console.log(newUser);
    }

    return (
        <div className="col-span-1 bg-orange-100 p-8 shadow rounded-md">
            <h4 className="font-bold text-neutral-600 text-xl w-full text-center mb-8 uppercase">Contact Us</h4>
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
                        placeholder="First Name"
                        {...register("firstname", {
                            required: "Firstname is required"
                        })}
                    />
                    <FormValidationError error={errors?.firstname} />
                </div>
                <div className="flex flex-col w-full gap-2">
                    <label className="text-neutral-600" htmlFor="email">Email</label>
                    <input 
                        className="border border-neutral-300 px-2 py-1 text-sm h-10 rounded"
                        type="email" 
                        name="email" 
                        id="email"
                        placeholder="Email Address"
                        {...register("email", {
                            required: "Email is required"
                        })}
                    />
                    <FormValidationError error={errors?.email} />
                </div>
                <div className="flex flex-col w-full gap-2">
                    <label className="text-neutral-600" htmlFor="phone">Phone Number</label>
                    <input 
                        className="border border-neutral-300 px-2 py-1 text-sm h-10 rounded"
                        aria-invalid={!!errors.phone}
                        type="number" 
                        name="phone" 
                        id="phone"
                        placeholder="Phone Number"
                        {...register("phone", {
                            required: "phone is required"
                        })}
                    />
                    <FormValidationError error={errors?.phone} />
                </div>
                <div className="flex flex-col w-full gap-2">
                    <label className="text-neutral-600" htmlFor="location">Location</label>
                    <input 
                        className="border border-neutral-300 px-2 py-1 text-sm h-10 rounded"
                        aria-invalid={!!errors.location}
                        type="text" 
                        name="location" 
                        id="location"
                        placeholder="Location"
                        {...register("location", {
                            required: "location is required"
                        })}
                    />
                    <FormValidationError error={errors?.location} />
                </div>
                <div className="flex flex-col w-full gap-2 col-span-2">
                    <label className="text-neutral-600" htmlFor="description">Tell Us</label>
                    <textarea 
                        className="border border-neutral-300 px-2 py-1 w-full text-sm rounded"
                        aria-invalid={!!errors.description}
                        name="description" 
                        id="description"
                        rows={4}  // controls height
                        placeholder="Leave your message here"
                        {...register("description", {
                            required: "description is required"
                        })}
                    />
                    <FormValidationError error={errors?.description} />
                </div>

                <input className="bg-green-600 w-full py-2 text-md font-bold text-neutral-100 rounded cursor-pointer mt-4" type="submit" value="Submit Message" />
            </form>
        </div>
    )
}

export default ContactForm;