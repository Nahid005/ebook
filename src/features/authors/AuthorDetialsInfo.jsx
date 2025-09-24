import Loading from "@/components/Loading";
import { useGetAuthorDetails } from "./useGetAuthorDetails";
import { useGetBooksByAuthor } from "./useGetBooksByAuthor";
import BookItem from "../book/BookItem";
import AuthorInfo from "./AuthorInfo";
import Error from "@/components/Error";

function AuthorDetailsInfo() {
    const {authorWiseBooks, isLoading: isAuthorWiseBooks, isError: isAuthorWiseBooksError} = useGetBooksByAuthor()
    const {authorDetails, isLoading: isAuthorDetails, isError: isAuthorDetailsError} = useGetAuthorDetails();
    
    if(isAuthorWiseBooks || isAuthorDetails) return <Loading />
    if(isAuthorDetailsError || isAuthorWiseBooksError) return <Error message="something went wrong" />

    const authorInfo = authorDetails?.at(0);
    return (
        <div className="">
            <AuthorInfo authorInfo={authorInfo} />
            <div className="">
                <h4 className="font-bold text-neutral-600 text-2xl my-4">All books by {authorInfo?.name}</h4>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 pb-10">
                {
                    authorWiseBooks.length > 0 && authorWiseBooks?.map(book => <BookItem key={book._id} book={book} />)
                }
            </div>
        </div>
    )
}

export default AuthorDetailsInfo;