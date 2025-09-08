import { baseURL } from "@/lib/halper";
import { useGetAuthorDetails } from "./useGetAuthorDetails";
import Loading from "@/components/Loading";


function AuthorInfo({stock}) {
    const {authorDetails, isPending: isAuthorDetails} = useGetAuthorDetails();

    if(isAuthorDetails) return <Loading />
    const {name, image, description } = authorDetails ?? {};
    

    return (
        <div className="flex flex-col md:flex-row md:justify-start justify-center items-start gap-2 my-4 border-b border-b-neutral-200 pb-3">
            <div className="">
                <img className="rounded-md md:w-96" src={`${baseURL}/assets/userImages/${image}`} alt={name} />
            </div>
            <div className="flex flex-col justify-start items-start gap-1">
                <h4 className="text-2xl font-bold text-neutral-600">{name}</h4>
                <p className="text-sm text-neutral-600 font-medium"><span className="text-lg font-bold">{stock}</span> Books</p>
                <h4 className="text-xl font-bold text-neutral-600">About</h4>
                <p className="text-sm text-neutral-600 font-medium">{description.slice(0, 500)}</p>
            </div>
        </div>
    )
}

export default AuthorInfo;