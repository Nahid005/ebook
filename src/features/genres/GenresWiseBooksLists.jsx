import Loading from "@/components/Loading";
import { useGetGenreWiseBooks } from "./useGetGenreWiseBooks";
import BookItem from "../book/BookItem";
import Error from "@/components/Error";

function GenresWiseBooksLists() {
    const {genreWiseBooks, error, isLoading, isError, refetch} = useGetGenreWiseBooks();

    if(isLoading) return <Loading />
    if(isError) return <Error error={error} reset={refetch} />

    return (
        <div className="">
            <h4 className="font-bold text-neutral-600 text-2xl my-4">Genres wise books</h4>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 pb-10">
                {
                    genreWiseBooks?.length > 0 && genreWiseBooks?.map(book => <BookItem key={book._id} book={book} />)
                }
            </div>
        </div>
    )
}

export default GenresWiseBooksLists;