import { getBooksByPublisher } from "@/services/publisherApi";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

export function useGetBooksByPublisher() {
    const {publisherId} = useParams();

    const {data, error, isError, isLoading, refetch} = useQuery({
        queryKey: ["publisherBooks", publisherId],
        queryFn: () => getBooksByPublisher(publisherId),
        select: (res) => res.data.bookDetails
    })

    return {publisherByBooks: data ?? [], error, isError, isLoading, refetch}
}