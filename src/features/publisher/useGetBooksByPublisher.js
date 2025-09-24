import { getBooksByPublisher } from "@/services/publisherApi";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

export function useGetBooksByPublisher() {
    const {publisherId} = useParams();

    const {data, isError, isLoading} = useQuery({
        queryKey: ["publisherBooks", publisherId],
        queryFn: () => getBooksByPublisher(publisherId),
        select: (res) => res.data.bookDetails
    })

    return {publisherByBooks: data ?? [], isError, isLoading}
}