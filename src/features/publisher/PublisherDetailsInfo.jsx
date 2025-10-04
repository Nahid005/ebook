import Loading from "@/components/Loading";
import { useGetPublisherDetails } from "./useGetPublisherDetails";
import Error from "@/components/Error";
import PublisherInfo from "./PublisherInfo";
import { useGetBooksByPublisher } from "./useGetBooksByPublisher";
import BookItem from "../book/BookItem";
import { usePurchasedBook } from "../purchasedbooks/usePurchasedBook";

function PublisherDetailsInfo() {
    const {purchasedBooks} = usePurchasedBook();

    const {
        publisherDetails, 
        error: publisherDetailsError, 
        isError: isPublisherDetailsError, 
        isLoading: isPublisherDetailsLoading, 
        refetch: isPublisherDetailsRefetch
    } = useGetPublisherDetails();

    const {
        publisherByBooks, 
        error: publisherByBooksError, 
        isError: isPublisherByBookError, 
        isLoading: isPublisherByBookLoading, 
        refetch: isPublisherByBookRefetch
    } = useGetBooksByPublisher();

    // Handle loading
    if (isPublisherDetailsLoading || isPublisherByBookLoading) {
        return <Loading />;
    }

    // Handle error
    if (isPublisherDetailsError || isPublisherByBookError) {
        return (
            <Error
            error={publisherDetailsError || publisherByBooksError}
            reset={() => {
                // You can refetch both, or decide which one to retry
                isPublisherDetailsRefetch();
                isPublisherByBookRefetch();
            }}
            />
        );
    }

    const purchasedIds = purchasedBooks.map(book => book.bookDetails._id);
    const result = publisherByBooks.map(book => ({
    ...book,
    purchased: purchasedIds.includes(book._id)
    }));

    const publisheInfo = publisherDetails.at(0)
    
    return (
        <>
            <PublisherInfo publisheInfo={publisheInfo} />

            <div className="my-8">
                <h4 className="font-bold text-xl text-neutral-600 mb-5">All Books By {publisheInfo?.name}</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 pb-10">
                    {
                        result?.length > 0 && result?.map(book => <BookItem key={book._id} book={book} />)
                    }
                </div>
            </div>
        </>
    )
}

export default PublisherDetailsInfo;