import Error from "@/components/Error";
import Loading from "@/components/Loading";
import { clearCartItems } from "@/features/cart/cartSlice";
import { useTransectionStatus } from "@/hooks/useTransectionStatus";
import { storage } from "@/lib/storage";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function PaymentSuccess() {
    const {transectionStatus, error, isError, isLoading, refetch} = useTransectionStatus();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    if(isLoading) return <Loading />
    if(isError) return <Error error={error} reset={refetch} />

    if(transectionStatus.success) {
        dispatch(clearCartItems())
        storage.clearCartItems();
        toast.success("Books purchased successfully")
        navigate('/purchedbooks')
    }

}

export default PaymentSuccess;