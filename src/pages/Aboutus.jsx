import DOMPurify from "dompurify";
import Loading from "@/components/Loading";
import { usePages } from "@/hooks/usePages";

function Aboutus() {
    const {pages, isError, isLoading} = usePages()

    if(isLoading) return <Loading />;
    if(isError) return;

    const aboutUs = DOMPurify.sanitize(pages.at(0)?.about_us || "");

    return (
        <article className="py-8">
            <h4 className="font-bold text-xl text-neutral-600 mb-5">About Us</h4>
            <div 
                className="prose prose-neutral max-w-none"
                dangerouslySetInnerHTML={{ __html: aboutUs }}
            />
        </article>
    )
}

export default Aboutus;