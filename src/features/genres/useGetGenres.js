import { getGenres } from "@/services/genresApi";
import { useQuery } from "@tanstack/react-query";

export function useGetGenres() {
    const {data, isError, isLoading} = useQuery({
        queryKey: ['genres'],
        queryFn: getGenres,
        select: (res) => res.data.categoryDetails
    })

    return {genres: data ?? [], isError, isLoading}
}