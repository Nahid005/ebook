import Error from "@/components/Error";
import MiniLoading from "@/components/MiniLoading";
import { useGetNewBooks } from "./useGetNewBooks";
import BookItem from "./BookItem";

function NewBooks() {
    const {newBooks, error, isError, isLoading, refetch} = useGetNewBooks();

    if(isLoading) return <MiniLoading />
    if(isError) return <Error error={error} reset={refetch} />

    return (
        <div className="">
            <h4 className="font-bold text-xl text-neutral-600 mb-5">New Books</h4>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 pb-10">
                {
                    newBooks?.map(book => <BookItem key={book._id} book={book} />)
                }
            </div>
        </div>
    )
}

export default NewBooks;