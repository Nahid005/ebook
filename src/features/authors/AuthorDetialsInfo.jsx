import Loading from "@/components/Loading";
import { useGetAuthorDetails } from "./useGetAuthorDetails";
import { useGetBooksByAuthor } from "./useGetBooksByAuthor";
import BookItem from "../book/BookItem";
import AuthorInfo from "./AuthorInfo";

function AuthorDetailsInfo() {
    const {authorWiseBooks, isPending: isAuthorWiseBooks} = useGetBooksByAuthor()
    
    if(isAuthorWiseBooks) return <Loading />
    if (!authorWiseBooks?.length) return <p>No books available in this genre.</p>;
    const stock = authorWiseBooks.length;

    return (
        <div className="">
            <AuthorInfo stock={stock} />
            <div className="">
                <h4 className="font-bold text-neutral-600 text-2xl my-4">All books by {name}</h4>
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