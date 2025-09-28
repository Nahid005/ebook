import { purchaseBooks } from "@/services/paymentApi";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";

export function useInitializePayment() {
    const queryClient = useQueryClient();
    const token = useSelector(state => state.user.token)

    const {mutate: initializePayment, isError, isPending} = useMutation({
        mutationFn: (paymentInfo) => purchaseBooks(paymentInfo, token),
        onSuccess: (data) => {
            
            console.log(data)

            const {GatewayPageURL, success} = data?.data
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