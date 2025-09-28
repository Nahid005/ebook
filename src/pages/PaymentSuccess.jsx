import Error from "@/components/Error";
import Loading from "@/components/Loading";
import { useTransectionStatus } from "@/hooks/useTransectionStatus";

function PaymentSuccess() {
    const {transectionStatus, error, isError, isLoading, refetch} = useTransectionStatus();

    if(isLoading) return <Loading />
    if(isError) return <Error error={error} reset={refetch} />

    console.log(transectionStatus);

    return <h1>Payment Success</h1>
}

export default PaymentSuccess;