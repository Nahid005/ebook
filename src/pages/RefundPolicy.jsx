import DOMPurify from "dompurify";
import Loading from "@/components/Loading";
import { usePages } from "@/hooks/usePages";

function RefundPolicy() {
    const {pages, isError, isLoading} = usePages()

    if(isLoading) return <Loading />;
    if(isError) return;

    const refundPolicy = DOMPurify.sanitize(pages.at(0)?.return_and_refund || "");

    return (
        <article className="py-8">
            <h4 className="font-bold text-xl text-neutral-600 mb-5">Return And Refund Policy</h4>
            <div 
                className="prose prose-neutral max-w-none"
                dangerouslySetInnerHTML={{ __html: refundPolicy }}
            />
        </article>
    )
}

export default RefundPolicy;