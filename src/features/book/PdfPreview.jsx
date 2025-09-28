import { baseURL } from "@/lib/halper";
import { useState } from "react";
import { Document, Page } from "react-pdf";

function PdfPreview({ fileUrl }) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      <Document
        file={`${baseURL}/assets/bookImages/${fileUrl}`} // Path to your PDF (from public/ folder)
        onLoadSuccess={onDocumentLoadSuccess}
      >
        {Array.from({ length: Math.min(numPages || 0, 2) }, (_, index) => (
           <Page key={`page_${index + 1}`} pageNumber={index + 1} />
        ))}
      </Document>
      <button onClick={() => setPageNumber(pageNumber - 1)} disabled={pageNumber <= 1}>
        Previous
      </button>
      <button onClick={() => setPageNumber(pageNumber + 1)} disabled={pageNumber >= numPages}>
        Next
      </button>

          {/* <iframe id="pdfViewer" src={`${baseURL}/assets/bookImages/${fileUrl}`} width="100%" height="600px"></iframe> */}
    </div>
  );
}

export default PdfPreview;
