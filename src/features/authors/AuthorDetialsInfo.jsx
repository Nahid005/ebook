import { useGetAuthorDetails } from "./useGetAuthorDetails";
import { useGetBooksByAuthor } from "./useGetBooksByAuthor";
import BookItem from "../book/BookItem";
import AuthorInfo from "./AuthorInfo";
import Error from "@/components/Error";
import MiniLoading from "@/components/MiniLoading";
import { usePurchasedBook } from "../purchasedbooks/usePurchasedBook";

function AuthorDetailsInfo() {
    const {purchasedBooks} = usePurchasedBook()

    const {
        authorWiseBooks,
        error: authorWiseBooksError,
        isError: isAuthorWiseBooksError,
        isLoading: isAuthorWiseBooksLoading,
        refetch: refetchAuthorWiseBooks,
    } = useGetBooksByAuthor();

    const {
        authorDetails,
        error: authorDetailsError,
        isError: isAuthorDetailsError,
        isLoading: isAuthorDetailsLoading,
        refetch: refetchAuthorDetails,
    } = useGetAuthorDetails();

    // Handle loading
    if (isAuthorWiseBooksLoading || isAuthorDetailsLoading) {
        return <MiniLoading />;
    }

    // Handle error
    if (isAuthorWiseBooksError || isAuthorDetailsError) {
        return (
            <Error
            error={authorWiseBooksError || authorDetailsError}
            reset={() => {
                // You can refetch both, or decide which one to retry
                refetchAuthorWiseBooks();
                refetchAuthorDetails();
            }}
            />
        );
    }

    const purchasedIds = purchasedBooks.map(book => book.bookDetails._id);
    const result = authorWiseBooks.map(book => ({
    ...book,
    purchased: purchasedIds.includes(book._id)
    }));

    const authorInfo = authorDetails?.at(0);

    return (
        <div className="">
            <AuthorInfo authorInfo={authorInfo} />
            <div className="">
                <h4 className="font-bold text-neutral-600 text-2xl my-4">All books by {authorInfo?.name}</h4>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 pb-10">
                {
                    result?.length > 0 && result?.map(book => <BookItem key={book._id} book={book} />)
                }
            </div>
        </div>
    )
}

export default AuthorDetailsInfo;