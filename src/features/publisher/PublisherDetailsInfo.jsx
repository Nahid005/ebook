import Loading from "@/components/Loading";
import { useGetPublisherDetails } from "./useGetPublisherDetails";
import Error from "@/components/Error";
import PublisherInfo from "./PublisherInfo";

function PublisherDetailsInfo() {
    const {publisherDetails, isError, isLoading} = useGetPublisherDetails();

    if(isLoading) return <Loading />
    if(isError) return <Error message="Publisher not found" />

    const {
        name, 
        images, 
        since_year,
        description, 
        website_url, 
        facebook_url, 
        youtube_url, 
        instagram_url,  
    } = publisherDetails.at(0)

    
    return (
        <>
            <PublisherInfo />
        </>
    )
}

export default PublisherDetailsInfo;