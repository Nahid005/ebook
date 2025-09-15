import Loading from "@/components/Loading";
import { useGetPublisherDetails } from "./useGetPublisherDetails";
import Error from "@/components/Error";
import { baseURL } from "@/lib/halper";

function PublisherInfo() {
    const {publisherDetails, isError, isLoading} = useGetPublisherDetails();

    if(isLoading) return <Loading />
    if(isError) return <Error message="Publisher not found" />

    const {
        name, 
        image, 
        since_year,
        description, 
        website_url, 
        facebook_url, 
        youtube_url, 
        instagram_url,  
    } = publisherDetails.at(0)

    console.log(image)

    
    return (
        <div className="flex flex-col md:flex-row md:justify-start justify-center items-start gap-2 my-4 border-b border-b-neutral-200 pb-3">
            <div className="">
                <img className="rounded-md md:w-96" src={`${baseURL}/assets/userImages/${image}`} alt={name} />
            </div>
            <div className="flex flex-col justify-start items-start gap-1">
                <h4 className="text-2xl font-bold text-neutral-600">{name}</h4>
                {/* <p className="text-sm text-neutral-600 font-medium"><span className="text-lg font-bold">{stock}</span> Books</p> */}
                <h4 className="text-xl font-bold text-neutral-600">About</h4>
                <p className="text-sm text-neutral-600 font-medium">{description?.slice(0, 500)}</p>
            </div>
        </div>
    )
}

export default PublisherInfo;