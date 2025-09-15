import { getPublisherDetails } from "@/services/publisherApi";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

export function useGetPublisherDetails() {
    const {publisherId} = useParams();

    const {data, isError, isLoading} = useQuery({
        queryKey: ["publisher"],
        queryFn: () => getPublisherDetails(publisherId),
        select: (res) => res.data.publisherDetails
    })

    return {publisherDetails: data ?? [], isError, isLoading}
}