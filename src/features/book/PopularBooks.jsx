import Error from "@/components/Error";
import BookItem from "./BookItem";
import { useGetPopularBooks } from "./useGetPopularBooks";
import MiniLoading from "@/components/MiniLoading";

function PopularBooks() {
    const {popularBooks, isError, isLoading} = useGetPopularBooks();

    if(isLoading) return <MiniLoading />
    if(isError) return <Error message={"Books not found"} />

    return (
        <div className="">
            <h4 className="font-bold text-xl text-neutral-600 mb-5">Popular Books</h4>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 pb-10">
                {
                    popularBooks?.map(book => <BookItem key={book._id} book={book} />)
                }
            </div>
        </div>
    )
}

export default PopularBooks;