import DOMPurify from "dompurify";
import Loading from "@/components/Loading";
import { usePages } from "@/hooks/usePages";

function Privacy() {
  const { pages, isError, isPending } = usePages();

  if (isPending) return <Loading />;
  if (isError) return null;

  const privacy = DOMPurify.sanitize(pages.at(0)?.privacy_policy || "");

  return (
    <article className="py-8">
      <h4 className="font-bold text-xl text-neutral-600 mb-5">Privacy Policy</h4>
      <div
        className="prose prose-neutral max-w-none"
        dangerouslySetInnerHTML={{ __html: privacy }}
      />
    </article>
  );
}


export default Privacy