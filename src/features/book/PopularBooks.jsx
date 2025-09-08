import Error from "@/components/Error";
import BookItem from "./BookItem";
import { useGetPopularBooks } from "./useGetPopularBooks";
import Loading from "@/components/Loading";

function PopularBooks() {
    const {popularBooks, isError, isPending} = useGetPopularBooks();

    

    if(isPending) return <Loading />
    if(isError) return <Error message={"Internal Server Error"} />

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