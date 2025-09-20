import { PurchaseBooks } from "@/services/paymentApi";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export function useInitializePayment() {
    const queryClient = useQueryClient();

    const {mutate: initializePayment, isError, isPending} = useMutation({
        mutationFn: (paymentInfo) => PurchaseBooks(paymentInfo),
        onSuccess: (data) => {
            console.log(data)
            queryClient.invalidateQueries({queryKey: ['initializepayment']})
            toast.success("payment initialize success")
        },
        onError: (error) => {
            console.log(error.message)
        }
    })

    return {initializePayment, isError, isPending}
}