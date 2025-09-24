import { PurchaseBooks } from "@/services/paymentApi";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useInitializePayment() {
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    const {mutate: initializePayment, isError, isPending} = useMutation({
        mutationFn: (paymentInfo) => PurchaseBooks(paymentInfo),
        onSuccess: (data) => {
            const {GatewayPageURL, success, tran_id, script_url} = data?.data
            if (success) {
                window.location.href = GatewayPageURL;
            } else {
                alert("Payment session failed!");
            }

            queryClient.invalidateQueries({queryKey: ['initializepayment']})
            toast.success("payment initialize success")
        },
        onError: (error) => {
            console.log(error.message)
        }
    })

    return {initializePayment, isError, isPending}
}