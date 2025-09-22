import { getPopularBooks } from "@/services/booksAPI";
import { useQuery } from "@tanstack/react-query";

export function useGetPopularBooks() {
    const {data, isError, isLoading} = useQuery({
        queryKey: ['book'],
        queryFn: getPopularBooks,
        select: (res) => res.data.bookDetails
    })
    
    return {popularBooks: data ?? [], isError, isLoading}
}

