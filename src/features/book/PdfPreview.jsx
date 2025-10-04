import { baseURL } from "@/lib/halper";

function PdfPreview({ fileUrl }) {
  const pdfUrl = `${baseURL}/assets/bookImages/${fileUrl}#toolbar=0&navpanes=0&scrollbar=0`;

  return (
    <div>
      <iframe id="pdfViewer" src={pdfUrl} width="100%" height="600px"></iframe>
    </div>
  );
}

export default PdfPreview;
