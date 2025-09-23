import { baseURL } from "@/lib/halper";
import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

// Fix worker setup
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url
).toString();

function PdfPreview({ fileUrl }) {
  const [numPages, setNumPages] = useState(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className="">
      <Document
        file={`${baseURL}/assets/bookImages/${fileUrl}`}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        {Array.from({ length: Math.min(numPages || 0, 2) }, (_, index) => (
          <Page key={`page_${index + 1}`} pageNumber={index + 1} />
        ))}
      </Document>
    </div>
  );
}

export default PdfPreview;
