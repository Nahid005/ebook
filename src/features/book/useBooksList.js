import { getBooks } from "@/services/booksAPI";
import { useQuery } from "@tanstack/react-query";

export function useBooksList() {
    const {data, isLoading, isError} = useQuery({
        queryKey: ['book'],
        queryFn: getBooks,
        select: (res) => res.data.bookDetails
    })

    return {books: data ?? [], isLoading, isError}
}