import Loading from "@/components/Loading";
import FavouriteBookItem from "./FavouriteBookItem";
import { useGetFavBooks } from "./useGetFavBooks";
import Error from "@/components/Error";

function FavouriteBooksList() {
    const {getFavBook, error, isError, isLoading, refetch} = useGetFavBooks();

    if(isLoading) return <Loading />
    if(isError) return <Error error={error} reset={refetch} />

    return (
        <div className="m-2">
            <h4 className="font-bold text-xl text-neutral-600 mb-5">All Favourite Books</h4>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 pb-10">
                {
                    getFavBook?.map(book => <FavouriteBookItem key={book.bookDetails._id} book={book} />)
                }
            </div>
        </div>
    )
}

export default FavouriteBooksList;