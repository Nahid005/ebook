import Error from "@/components/Error";
import { useGetTrandingBooks } from "./useGetTrandingBooks"
import BookItem from "./BookItem";

function TrandingBooks() {
    const {trandingBooks, isError, isPending} = useGetTrandingBooks();

    if(isPending) return <p>Loading..</p>
    if(isError) return <Error message={"Internal Server Error"} />

    return (
        <div className="">
            <h4 className="font-bold text-xl text-neutral-600 mb-5">Tranding Books</h4>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 pb-10">
                {
                    trandingBooks?.map(book => <BookItem key={book._id} book={book} />)
                }
            </div>
        </div>
    )
}

export default TrandingBooks