import Loading from "@/components/Loading";
import { usePurchasedBook } from "./usePurchasedBook";
import Error from "@/components/Error";
import PurchasedBook from "./PurchasedBook";

function PurchasedBookList() {
    const {purchasedBooks, error, isError, isLoading, refetch} = usePurchasedBook();
 
    if(isLoading) return <Loading />
    if(isError) return <Error error={error} reset={refetch} />

    return (
        <div className="">
            <h4 className="font-bold text-xl text-neutral-600 mb-5">Your Purchased Books</h4>
            <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-300">
                    <thead className="bg-gray-200">
                        <tr>
                            <th className="py-2 px-4 border">Image</th>
                            <th className="py-2 px-4 border">Book Name</th>
                            <th className="py-2 px-4 border">Author Name</th>
                            <th className="py-2 px-4 border">Publisher Name</th>
                            <th className="py-2 px-4 border">Purchase Price</th>
                            <th className="py-2 px-4 border">Action</th>
                        </tr>
                    </thead>

                    {
                        purchasedBooks?.map(book => <PurchasedBook key={book._id} book={book} />)
                    }
                </table>
            </div>
        </div>
    )
}

export default PurchasedBookList;