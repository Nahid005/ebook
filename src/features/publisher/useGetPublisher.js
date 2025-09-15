import { getPublisher } from "@/services/publisherApi";
import { useQuery } from "@tanstack/react-query";

export function useGetPublisher() {
    const {data, isError, isLoading} = useQuery({
        queryKey: ["publisher"],
        queryFn: getPublisher,
        select: (res) => res.data.publisherDetails,
    })

    return {publishers: data ?? [], isError, isLoading}
}