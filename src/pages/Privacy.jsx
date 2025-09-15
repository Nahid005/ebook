import Loading from "@/components/Loading";
import { usePages } from "@/hooks/usePages";

function Privacy() {
    const {pages, isError, isPending} = usePages()

    if(isPending) return <Loading />;
    if(isError) return;

    const privacy = pages?.privacy_policy?.replace(/<[^>]+>/g, '');

    return (
        <article className="py-8">
            <h4 className="font-bold text-xl text-neutral-600 mb-5">Privacy Policy</h4>
            <p>{privacy}</p>
        </article>
    )
}

export default Privacy