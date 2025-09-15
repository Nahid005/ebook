import { getPages } from "@/services/pagesApi";
import { useQuery } from "@tanstack/react-query";

export function usePages() {
    const {data, isError, isLoading} = useQuery({
        queryKey: ['pages'],
        queryFn: getPages,
        select: (res) => res.data.pagesDetails
    })

    return {pages: data ?? [], isError, isLoading}
}