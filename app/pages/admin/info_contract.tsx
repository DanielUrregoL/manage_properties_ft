import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

interface InfoContractProps {
  file: string;
}

export function InfoContract({ file }: InfoContractProps) {
  const [numPages, setNumPages] = useState<number | null>(null);

  const onLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

  return (
    <div className="w-full flex justify-center bg-white p-4 rounded shadow-md">
      <Document file={file} onLoadSuccess={onLoadSuccess}>
        {Array.from(new Array(numPages || 0), (_, index) => (
          <Page
            key={`page_${index + 1}`}
            pageNumber={index + 1}
            width={800}
            className="mb-4"
          />
        ))}
      </Document>
    </div>
  );
}
