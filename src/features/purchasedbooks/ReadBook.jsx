import Loading from "@/components/Loading";
import { usePurchasedBookDetails } from "./usePurchasedBook";
import Error from "@/components/Error";

function ReadBook() {
    const {purchasedBookDetails, error, isError, isLoading, refetch} = usePurchasedBookDetails();

    if(isLoading) return <Loading />
    if(isError) return <Error error={error} reset={refetch} />

    return (
        <h1>This book is </h1>
    )
}

export default ReadBook;