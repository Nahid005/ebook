import { useTransectionStatus } from "@/hooks/useTransectionStatus";

function PaymentSuccess() {
    const {transectionStatus, isError, isLoading} = useTransectionStatus();

    console.log(transectionStatus)

    return <h1>Payment Success</h1>
}

export default PaymentSuccess;