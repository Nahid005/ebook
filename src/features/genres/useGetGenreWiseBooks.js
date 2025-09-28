import { getBooksGenreWise } from "@/services/genresApi";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

export function useGetGenreWiseBooks() {
    const {genreId} = useParams();

    const {data, error, isLoading, isError, refetch} = useQuery({
       queryKey: ['genrawisebooks', genreId],
       queryFn: () => getBooksGenreWise(genreId),
       select: (res) => res.data.bookDetails
    })

    return {genreWiseBooks: data ?? [], error, isLoading, isError, refetch}
} 