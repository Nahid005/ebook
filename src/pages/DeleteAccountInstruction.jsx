import DOMPurify from "dompurify";
import Loading from "@/components/Loading";
import { usePages } from "@/hooks/usePages";
import Error from "@/components/Error";

function DeleteAccountInstruction() {
    const {pages, error, isError, isLoading, refetch} = usePages()

    if(isLoading) return <Loading />;
    if(isError) return <Error error={error} reset={refetch} />;

    const deleteAccount = DOMPurify.sanitize(pages.at(0)?.delete_account_instruction || "");

    return (
        <article className="py-8">
            <h4 className="font-bold text-xl text-neutral-600 mb-5">Delete Account Instruction</h4>
            <div 
                className="prose prose-neutral max-w-none"
                dangerouslySetInnerHTML={{ __html: deleteAccount }}
            />
        </article>
    )
}

export default DeleteAccountInstruction;