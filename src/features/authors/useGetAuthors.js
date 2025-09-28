import { getAuthors } from "@/services/authorsApi";
import { useQuery } from "@tanstack/react-query";

export function useGetAuthors() {
    const {data, error, isError, isLoading, refetch} = useQuery({
        queryKey: ['author'],
        queryFn: getAuthors,
        select: (res) => res.data.authorDetails,
    })

    return {authors: data ?? [], error, isError, isLoading, refetch}
}