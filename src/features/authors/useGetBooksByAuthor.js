import { getBooksByAuthor } from "@/services/authorsApi";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

export function useGetBooksByAuthor() {
    const {authorId} = useParams();

    const {data, isLoading, isError} = useQuery({
        queryKey: ['authorwisebooks'],
        queryFn: () => getBooksByAuthor(authorId),
        select: (res) => res.data.bookDetails,
    })

    return {authorWiseBooks: data ?? [], isLoading, isError}
}