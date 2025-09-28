import { getRelatedBooks } from "@/services/booksAPI";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

export function useGetRelatedBooks() {
    const {bookId} = useParams();

    const {data, error, isError, isLoading, refetch} = useQuery({
        queryKey: ["realtedbooks"],
        queryFn: () => getRelatedBooks(bookId),
        select: (res) => res.data.bookDetails,
    })

    return {relatedBooks: data ?? [], error, isError, isLoading, refetch}
}