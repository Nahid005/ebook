import { getNewBooks } from "@/services/booksAPI"
import { useQuery } from "@tanstack/react-query"

export function useGetNewBooks() {
    const {data, error, isError, isLoading, refetch} = useQuery({
        queryKey: ['book'],
        queryFn: getNewBooks,
        select: (res) => res.data.bookDetails
    })
    
    return {newBooks: data ?? [], error, isError, isLoading, refetch}
}