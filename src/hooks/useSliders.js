import { getSliders } from "@/services/slidersApi";
import { useQuery } from "@tanstack/react-query"

export function useSliders() {
    const {data: sliders, isLoading, isError} = useQuery({
        queryKey: ['slider'],
        queryFn: getSliders,
        select: (res) => res.data.sliderDetails
    });

    return {sliders, isLoading, isError}
}