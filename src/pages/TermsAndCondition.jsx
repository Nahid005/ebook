import Loading from "@/components/Loading";
import { usePages } from "@/hooks/usePages";


function TermsAndCondition() {
    const {pages, isError, isLoading} = usePages()

    if(isLoading) return <Loading />;
    if(isError) return;

    const terms = pages.at(0)?.terms_of_use?.replace(/<[^>]+>/g, '');

    return (
        <article className="py-8">
            <h4 className="font-bold text-xl text-neutral-600 mb-5">Terms And Conditions</h4>
            <p>{terms}</p>
        </article>
    )
}

export default TermsAndCondition;