import { getAuthors } from "@/services/authorsApi";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";

export function useGetAuthors() {
    const [authors, setAuthors] = useState(null);
    const queryClient = useQueryClient();

    const {mutate, isPending, isError} = useMutation({
        mutationFn: getAuthors,
        onSuccess: (data => {
            setAuthors(data.data.authorDetails);
            queryClient.invalidateQueries({queryKey: ["authors"]})
        }),
        onError: (error => {
            console.log(error)
        })
    })

    useEffect(() => {
        mutate();
    }, [])

    return {authors, isError, isPending}
}