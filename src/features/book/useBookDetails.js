import { getBookDetails } from "@/services/booksAPI";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

export function useBookDetails() {
    const {bookId} = useParams();

    const {data, isLoading, isError} = useQuery({
        queryKey: ['book', bookId],
        queryFn: () => getBookDetails(bookId),
        select: (res) => res.data.bookDetails,
    })

    return {bookDetails: data ?? [], isLoading, isError}
}