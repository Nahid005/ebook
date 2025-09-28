import { getTrandingBooks } from "@/services/booksAPI";
import { useQuery } from "@tanstack/react-query";

export function useGetTrandingBooks() {
    const {data, error, isError, isLoading, refetch} = useQuery({
        queryKey: ['book'],
        queryFn: getTrandingBooks,
        select: (res) => res.data.bookDetails
    })

    return {trandingBooks: data ?? [], error, isError, isLoading, refetch}
}