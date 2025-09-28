import { getPublisher } from "@/services/publisherApi";
import { useQuery } from "@tanstack/react-query";

export function useGetPublisher() {
    const {data, error, isError, isLoading, refetch} = useQuery({
        queryKey: ["publisher"],
        queryFn: getPublisher,
        select: (res) => res.data.publisherDetails,
    })

    return {publishers: data ?? [], error, isError, isLoading, refetch}
}