import { baseURL } from '@/lib/halper';
import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import 'pdfjs-dist/web/pdf_viewer.css';


function PdfPreview({previewPdf}) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  // Handle successful PDF load
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  // Handle navigation
  const goToPrevPage = () => setPageNumber(pageNumber - 1);
  const goToNextPage = () => setPageNumber(pageNumber + 1);

  return (
    <div>
      <Document
        file={`${baseURL}/assets/bookImages/${previewPdf}`} // Replace with your PDF file path or URL
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} renderTextLayer={false} // Disable text layer
          renderAnnotationLayer={false} />
      </Document>
      <div>
        <p>
          Page {pageNumber} of {numPages}
        </p>
        <button onClick={goToPrevPage} disabled={pageNumber <= 1}>
          Previous
        </button>
        <button onClick={goToNextPage} disabled={pageNumber >= numPages}>
          Next
        </button>
      </div>
    </div>
  );
}

export default PdfPreview;