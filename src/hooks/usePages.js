import { getPages } from "@/services/pagesApi";
import { useQuery } from "@tanstack/react-query";

export function usePages() {
    const {data, error, isError, isLoading, refetch} = useQuery({
        queryKey: ['pages'],
        queryFn: getPages,
        select: (res) => res.data.pagesDetails
    })

    return {pages: data ?? [], error, isError, isLoading, refetch}
}