import Loading from "@/components/Loading";
import { useGetGenreWiseBooks } from "./useGetGenreWiseBooks";
import BookItem from "../book/BookItem";
import Error from "@/components/Error";
import { usePurchasedBook } from "../purchasedbooks/usePurchasedBook";

function GenresWiseBooksLists() {
    const {genreWiseBooks, error, isLoading, isError, refetch} = useGetGenreWiseBooks();
    const {purchasedBooks} = usePurchasedBook()

    if(isLoading) return <Loading />
    if(isError) return <Error error={error} reset={refetch} />

    const purchasedIds = purchasedBooks.map(book => book.bookDetails._id);
    const result = genreWiseBooks.map(book => ({
    ...book,
    purchased: purchasedIds.includes(book._id)
    }));

    return (
        <div className="">
            <h4 className="font-bold text-neutral-600 text-2xl my-4">Genres wise books</h4>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 pb-10">
                {
                    result?.length > 0 && result?.map(book => <BookItem key={book._id} book={book} />)
                }
            </div>
        </div>
    )
}

export default GenresWiseBooksLists;