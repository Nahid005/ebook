import { getPopularBooks } from "@/services/booksAPI";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";

export function useGetPopularBooks() {
    const [popularBooks, setPopularBooks] = useState([]);

    const queryclient = useQueryClient();

    const {mutate, isError, isPending} = useMutation({
        mutationFn: getPopularBooks,
        onSuccess: (data) =>{
            setPopularBooks(data.data.bookDetails);
            queryclient.invalidateQueries({
                queryKey: ["popularBooks"]
            })
        },
        onError: (error => {
            console.log(error.message)
        })
    })

    useEffect(() => {
        mutate();
    }, [])

    return {popularBooks, isError, isPending}
}

