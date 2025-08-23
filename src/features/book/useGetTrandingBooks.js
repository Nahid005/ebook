import { getTrandingBooks } from "@/services/booksAPI";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";

export function useGetTrandingBooks() {
    const [trandingBooks, setTrandingBooks] = useState([])
    const queryclient = useQueryClient();

    const {mutate, isPending, isError} = useMutation({
        mutationFn: getTrandingBooks,
        onSuccess: (data => {
            setTrandingBooks(data.data.bookDetails);
            queryclient.invalidateQueries({
                queryKey: ["trandingBooks"]
            })
        }),
        onError: (error => {
            console.log(error.message)
        }) 
    })

    useEffect(() => {
        mutate();
    }, [])

    return {trandingBooks, isPending, isError}
}