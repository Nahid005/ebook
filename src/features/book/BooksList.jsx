import Loading from "@/components/Loading";
import { useBooksList } from "./useBooksList"
import Error from "@/components/Error";
import BookItem from "./BookItem";

function BooksList() {
    const {books, isLoading, isError} = useBooksList();
    
    if(isLoading) return <Loading />
    if(isError) return <Error message="Books not found"/>

    return (
        <div className="my-8">
            <h4 className="font-bold text-xl text-neutral-600 mb-5">All Books</h4>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 pb-10">
                {
                    books?.map(book => <BookItem key={book._id} book={book} />)
                }
            </div>
        </div>
    )
}

export default BooksList