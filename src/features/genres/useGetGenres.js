import { getGenres } from "@/services/genresApi";
import { useQuery } from "@tanstack/react-query";

export function useGetGenres() {
    const {data, error, isError, isLoading, refetch} = useQuery({
        queryKey: ['genres'],
        queryFn: getGenres,
        select: (res) => res.data.categoryDetails
    })

    return {genres: data ?? [], error, isError, isLoading, refetch}
}