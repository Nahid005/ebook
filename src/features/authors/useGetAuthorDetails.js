import { getAuthorDetails } from "@/services/authorsApi";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

export function useGetAuthorDetails() {
    const {authorId} = useParams();

    const {data, error, isError, isLoading, refetch} = useQuery({
        queryKey: ['authordetails', authorId],
        queryFn: () => getAuthorDetails(authorId),
        select: (res) => res.data.authorDetails
    })

    return {authorDetails: data ?? [], error, isError, isLoading, refetch}
}