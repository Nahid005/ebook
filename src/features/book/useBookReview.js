import { getBookReview } from "@/services/booksAPI";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

export function useBookReview() {
    const {bookId} = useParams();

    const {data: bookReview, isLoading, isError} = useQuery({
        queryKey: ['review'],
        queryFn: () => getBookReview(bookId),
        select: (res) => res.data.bookReviewDetails
    })

    return {bookReview, isLoading, isError}
}