import { getBooksByAuthor } from "@/services/authorsApi";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function useGetBooksByAuthor() {
    const [authorWiseBooks, setAuthorWiseBooks] = useState([]);
    const queryClient = useQueryClient();
    const {authorId} = useParams();

    const {mutate, isPending, isError} = useMutation({
        mutationFn: () => getBooksByAuthor(authorId),
        onSuccess: (data) => {
            setAuthorWiseBooks(data.data.bookDetails)
            queryClient.invalidateQueries({
                queryKey: ["authorWiseBooks"]
            })
        },
        onError: (error => {
            console.log(error.message)
        })
    })

    useEffect(() => {
        mutate();
    }, [])

    return {authorWiseBooks, isPending, isError}
}