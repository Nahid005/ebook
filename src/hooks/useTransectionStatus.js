import { transectionStatus } from "@/services/paymentApi";
import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

export function useTransectionStatus() {
    const token = useSelector(state => state.user.token);
    const query = new URLSearchParams(useLocation().search);
    const tran_id = query.get("tran_id");

    const {data, isError, isLoading} = useQuery({
        queryKey: ["transectionstatus"],
        queryFn: () => transectionStatus(tran_id, token)
    })

    return {transectionStatus: data ?? [], isError, isLoading}
}