import { getTrandingBooks } from "@/services/booksAPI";
import { useQuery } from "@tanstack/react-query";

export function useGetTrandingBooks() {
    const {data, isLoading, isError} = useQuery({
        queryKey: ['book'],
        queryFn: getTrandingBooks,
        select: (res) => res.data.bookDetails
    })

    return {trandingBooks: data ?? [], isLoading, isError}
}