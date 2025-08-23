import Loading from "@/components/Loading";
import { useGetGenreWiseBooks } from "./useGetGenreWiseBooks";
import BookItem from "../book/BookItem";

function GenresWiseBooksLists() {
    const {genreWiseBooks, isPending, isError} = useGetGenreWiseBooks();

    if(isPending) return <Loading />
    if (isError) return <p>Something went wrong. Please try again.</p>;
    if (!genreWiseBooks?.length) return <p>No books available in this genre.</p>;

    return (
        <div className="">
            <h4 className="font-bold text-neutral-600 text-2xl my-4">Genres wise books</h4>
            {/* <div className="flex flex-col md:flex-row md:justify-start justify-center items-center gap-2 my-4 border-b border-b-neutral-200 pb-3">
                <div className="">
                    <img className="rounded-md" src={image} alt={title} />
                </div>
                <div className="flex flex-col justify-center items-center gap-1">
                    <h4 className="text-2xl font-bold text-neutral-600">{title}</h4>
                    <p className="text-sm text-neutral-600 font-medium"><span className="text-lg font-bold">{stock}</span> Books</p>
                </div>
            </div>
            <div className="">
                <h4 className="font-bold text-neutral-600 text-2xl my-4">All books in Recipe</h4>
            </div> */}

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 pb-10">
                {
                    genreWiseBooks.length > 0 && genreWiseBooks?.map(book => <BookItem key={book._id} book={book} />)
                }
            </div>
        </div>
    )
}

export default GenresWiseBooksLists;