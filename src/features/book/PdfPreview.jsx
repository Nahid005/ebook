import { useState, useRef, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { baseURL } from '@/lib/halper';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

// Set up the PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

function PdfPreview({ fileUrl }) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1.0); // For zoom control
  const [width, setWidth] = useState(0); // To make it 100% responsive
  const containerRef = useRef(null);

  const pdfUrl = `${baseURL}/assets/bookPdf/${fileUrl}`;

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  // Auto-resize the PDF width when container changes size
  useEffect(() => {
    function updateWidth() {
      if (containerRef.current) {
        setWidth(containerRef.current.offsetWidth);
      }
    }
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  return (
    <div className="flex flex-col items-center w-full space-y-4">
      {/* PDF Container */}
      <div ref={containerRef} className="w-full flex justify-center bg-gray-300 p-4">
        <Document
          file={pdfUrl}
          onLoadSuccess={onDocumentLoadSuccess}
          loading={<p>Loading PDF...</p>}
          onLoadError={(err) => console.error('PDF load error:', err)}
        >
          <Page
            pageNumber={pageNumber}
            scale={scale}
            width={width > 0 ? width * 0.9 : 600} // Fit container width (90%)
          />
        </Document>
      </div>
      {/* Controls */}
      <div className="flex flex-wrap justify-center items-center gap-3 bg-gray-100 p-3 rounded-md shadow-sm w-full max-w-2xl">
        <button
          onClick={() => setPageNumber((prev) => Math.max(prev - 1, 1))}
          disabled={pageNumber <= 1}
          className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
        >
          ◀ Prev
        </button>

        <span className="text-sm">
          Page {pageNumber} of {numPages || '--'}
        </span>

        <button
          onClick={() => setPageNumber((prev) => Math.min(prev + 1, numPages))}
          disabled={pageNumber >= numPages}
          className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
        >
          Next ▶
        </button>

        <button
          onClick={() => setScale((prev) => Math.max(prev - 0.1, 0.5))}
          className="px-3 py-1 bg-gray-200 rounded"
        >
          ➖ Zoom Out
        </button>

        <button
          onClick={() => setScale((prev) => Math.min(prev + 0.1, 2))}
          className="px-3 py-1 bg-gray-200 rounded"
        >
          ➕ Zoom In
        </button>
      </div>
    </div>
  );
}

export default PdfPreview;
