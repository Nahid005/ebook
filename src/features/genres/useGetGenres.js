import { getGenres } from "@/services/genresApi";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";

export function useGetGenres() {
    const [genres, setGenres] = useState(null);
    const queryClient = useQueryClient();

    const {mutate, isError, isPending} = useMutation({
        mutationFn: getGenres,
        onSuccess: (data) => {
            setGenres(data.data.categoryDetails);
            queryClient.invalidateQueries({queryKey: ["genres"]})
        },
        onError: (error => {
            console.log(error)
        })
    })

    useEffect(() => {
        mutate();
    }, [])

    return {mutate, genres, isError, isPending}
}