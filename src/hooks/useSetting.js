import { getSetting } from "@/services/settingApi";
import { useQuery } from "@tanstack/react-query"

export function useSetting() {
    const {data, error, isError, isLoading, refetch} = useQuery({
        queryKey: ['setting'],
        queryFn: getSetting,
        select: (res) => res.data.settingDetails
    });

    return {setting: data ?? {}, error, isError, isLoading, refetch}
}