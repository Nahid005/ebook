import Loading from "@/components/Loading";
import { useBooksList } from "./useBooksList"
import Error from "@/components/Error";
import BookItem from "./BookItem";
import { usePurchasedBook } from "../purchasedbooks/usePurchasedBook";

function BooksList() {
    const {books, error, isError, isLoading, refetch} = useBooksList();
    const {purchasedBooks} = usePurchasedBook();
    
    if(isLoading) return <Loading />
    if(isError) return <Error error={error} reset={refetch}/>

    const purchasedIds = purchasedBooks.map(book => book.bookDetails._id);
    const result = books.map(book => ({
    ...book,
    purchased: purchasedIds.includes(book._id)
    }));


    return (
        <div className="my-8">
            <h4 className="font-bold text-xl text-neutral-600 mb-5">All Books</h4>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 pb-10">
                {
                    result?.map(book => <BookItem key={book._id} book={book} />)
                }
            </div>
        </div>
    )
}

export default BooksList