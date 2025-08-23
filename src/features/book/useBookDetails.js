import { getBookDetails } from "@/services/booksAPI";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function useBookDetails() {
    const [bookDetails, setBookDetails] = useState(null);
    const {bookId} = useParams();
    const queryClient = useQueryClient();

    const {mutate, isPending, isError} = useMutation({
        mutationFn: () => getBookDetails(bookId),
        onSuccess: (data) => {
            setBookDetails(data.data.bookDetails[0]);
            queryClient.invalidateQueries({
                queryKey: ["bookDetails"]
            })
        },
        onError: (error => {
            console.log(error.message)
        })
    })

    useEffect(() => {
        mutate();
    }, [])

    return {bookDetails, isPending, isError}
}