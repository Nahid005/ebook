import Loading from "@/components/Loading";
import { useGetPublisherDetails } from "./useGetPublisherDetails";
import Error from "@/components/Error";
import PublisherInfo from "./PublisherInfo";
import { useGetBooksByPublisher } from "./useGetBooksByPublisher";
import BookItem from "../book/BookItem";

function PublisherDetailsInfo() {
    const {publisherDetails, isError, isLoading} = useGetPublisherDetails();
    const {publisherByBooks, isError: publisherByBookError, isLoading: publisherByBookLoading} = useGetBooksByPublisher();

    if(isLoading || publisherByBookLoading) return <Loading />
    if(isError || publisherByBookError) return <Error message="Publisher not found" />

    const publisheInfo = publisherDetails.at(0)
    return (
        <>
            <PublisherInfo publisheInfo={publisheInfo} />

            <div className="my-8">
                <h4 className="font-bold text-xl text-neutral-600 mb-5">All Books By {publisheInfo?.name}</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 pb-10">
                    {
                        publisherByBooks?.length > 0 && publisherByBooks?.map(book => <BookItem key={book._id} book={book} />)
                    }
                </div>
            </div>
        </>
    )
}

export default PublisherDetailsInfo;