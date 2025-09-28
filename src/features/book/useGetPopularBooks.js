import { getPopularBooks } from "@/services/booksAPI";
import { useQuery } from "@tanstack/react-query";

export function useGetPopularBooks() {
    const {data, error, isError, isLoading, refetch} = useQuery({
        queryKey: ['book'],
        queryFn: getPopularBooks,
        select: (res) => res.data.bookDetails
    })
    
    return {popularBooks: data ?? [], error, isError, isLoading, refetch}
}

