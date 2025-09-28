import { getBooksByAuthor } from "@/services/authorsApi";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

export function useGetBooksByAuthor() {
    const {authorId} = useParams();

    const {data, error, isError, isLoading, refetch} = useQuery({
        queryKey: ['authorwisebooks', authorId],
        queryFn: () => getBooksByAuthor(authorId),
        select: (res) => res.data.bookDetails,
    })

    return {authorWiseBooks: data ?? [], error, isError, isLoading, refetch}
}