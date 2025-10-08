import Loading from "@/components/Loading";
import { usePurchasedBookDetails } from "./usePurchasedBook";
import Error from "@/components/Error";
import PdfPreview from "../book/PdfPreview";

function ReadBook() {
    const {purchasedBookDetails, error, isError, isLoading, refetch} = usePurchasedBookDetails();

    if(isLoading) return <Loading />
    if(isError) return <Error error={error} reset={refetch} />

    const {pdf} = purchasedBookDetails?.at(0);

    return (
        <PdfPreview fileUrl={pdf} />
    )
}

export default ReadBook;