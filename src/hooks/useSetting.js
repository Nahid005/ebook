import { getSetting } from "@/services/settingApi";
import { useQuery } from "@tanstack/react-query"

export function useSetting() {
    const {data, isLoading, isError} = useQuery({
        queryKey: ['setting'],
        queryFn: getSetting,
        select: (res) => res.data.settingDetails
    });

    return {setting: data ?? {}, isLoading, isError}
}