import DOMPurify from "dompurify";
import Loading from "@/components/Loading";
import { usePages } from "@/hooks/usePages";
import Error from "@/components/Error";


function TermsAndCondition() {
    const {pages, error, isError, isLoading, refetch} = usePages()

    if(isLoading) return <Loading />;
    if(isError) return <Error error={error} reset={refetch} />;

    const terms = DOMPurify.sanitize(pages.at(0)?.terms_of_use || "");

    return (
        <article className="py-8">
            <h4 className="font-bold text-xl text-neutral-600 mb-5">Terms And Conditions</h4>
            <div 
                className="prose prose-neutral max-w-none"
                dangerouslySetInnerHTML={{ __html: terms }}
            />
        </article>
    )
}

export default TermsAndCondition;