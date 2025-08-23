import Loading from "@/components/Loading";
import { useGetAuthorDetails } from "./useGetAuthorDetails";
import { useGetBooksByAuthor } from "./useGetBooksByAuthor";
import BookItem from "../book/BookItem";

function AuthorDetailsInfo() {
    const {authorDetails, isPending: isAuthorDetails} = useGetAuthorDetails();
    const {authorWiseBooks, isPending: isAuthorWiseBooks} = useGetBooksByAuthor()
    
    if(isAuthorDetails && isAuthorWiseBooks) return <Loading />
    if (!authorWiseBooks?.length) return <p>No books available in this genre.</p>;
    const {name, image, description } = authorDetails;
    const stock = authorWiseBooks.length;

    return (
        <div className="">
            <h4 className="font-bold text-neutral-600 text-2xl my-4">Genres wise books</h4>
            <div className="flex flex-col md:flex-row md:justify-start justify-center items-center gap-2 my-4 border-b border-b-neutral-200 pb-3">
                <div className="">
                    <img className="rounded-md" src={image} alt={name} />
                </div>
                <div className="flex flex-col justify-center items-center gap-1">
                    <h4 className="text-2xl font-bold text-neutral-600">{name}</h4>
                    <p className="text-sm text-neutral-600 font-medium"><span className="text-lg font-bold">{stock}</span> Books</p>
                    <h4 className="text-xl font-bold text-neutral-600">About</h4>
                    <p className="text-sm text-neutral-600 font-medium">{description}</p>
                </div>
            </div>
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