import { getBooksGenreWise } from "@/services/genresApi";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function useGetGenreWiseBooks() {
    const [genreWiseBooks, setGenreWiseBooks] = useState([]);
    const {genreId} = useParams();
    const queryClient = useQueryClient();

    const {mutate, isPending, isError} = useMutation({
        mutationFn: () => getBooksGenreWise(genreId),
        onSuccess: (data => {
            setGenreWiseBooks(data.data.bookDetails);
            queryClient.invalidateQueries({
                queryKey: ["genrewiseBooks"]
            })
        }),
        onError: (error) => {
            console.log(error.message)
        }
    })

    useEffect(() => {
        mutate();
    }, [])

    return {genreWiseBooks, isPending, isError}
} 