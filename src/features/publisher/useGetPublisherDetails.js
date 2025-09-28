import { getPublisherDetails } from "@/services/publisherApi";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

export function useGetPublisherDetails() {
    const {publisherId} = useParams();

    const {data, error, isError, isLoading, refetch} = useQuery({
        queryKey: ["publisherDetails", publisherId],
        queryFn: () => getPublisherDetails(publisherId),
        select: (res) => res.data.publisherDetails
    })

    return {publisherDetails: data ?? [], error, isError, isLoading, refetch}
}