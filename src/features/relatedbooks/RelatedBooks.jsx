import MiniLoading from "@/components/MiniLoading";
import { useGetRelatedBooks } from "./useGetRelatedBooks";
import Error from "@/components/Error";
import BookItem from "../book/BookItem";
import { usePurchasedBook } from "../purchasedbooks/usePurchasedBook";

function RelatedBooks() {
    const {relatedBooks, error, isError, isLoading, refetch} = useGetRelatedBooks();
    const {purchasedBooks} = usePurchasedBook()

    if(isLoading) return <MiniLoading />
    if(isError) return <Error error={error} reset={refetch} />

    const purchasedIds = purchasedBooks.map(book => book.bookDetails._id);
    const result = relatedBooks.map(book => ({
    ...book,
    purchased: purchasedIds.includes(book._id)
    }));

    return (
        <div className="">
            <h4 className="font-bold text-xl text-neutral-600 mb-5">Related Books</h4>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 pb-10">
                {
                    result?.map(book => <BookItem key={book._id} book={book} />)
                }
            </div>
        </div>
    )
}

export default RelatedBooks;