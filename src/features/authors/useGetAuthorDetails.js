import { getAuthorDetails } from "@/services/authorsApi";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function useGetAuthorDetails() {
    const {authorId} = useParams();
    const [authorDetails, setAuthorDetails] = useState(null);
    const queryClient = useQueryClient();

    const {mutate, isPending, isError} = useMutation({
        mutationFn: () => getAuthorDetails(authorId),
        onSuccess: (data => {
            setAuthorDetails(data.data.authorDetails[0])
            queryClient.invalidateQueries({
                queryKey: ["authorDetails"]
            })
        }),
        onError: (error => {
            console.log(error.message)
        })
    })

    useEffect(() => {
        mutate();
    }, [])

    return {authorDetails, isPending, isError}
}