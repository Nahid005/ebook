import { getSliders } from "@/services/slidersApi";
import { useQuery } from "@tanstack/react-query"

export function useSliders() {
    const {data: sliders, error, isError, isLoading, refetch} = useQuery({
        queryKey: ['slider'],
        queryFn: getSliders,
        select: (res) => res.data.sliderDetails
    });

    return {sliders, error, isError, isLoading, refetch}
}