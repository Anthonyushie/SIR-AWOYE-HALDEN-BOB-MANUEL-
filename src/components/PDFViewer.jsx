import React from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import pdfFile from '../../public/Liturgy-of-songs.pdf';  // Adjust the path as necessary

function PDFViewer() {
  return (
    <div className="flex flex-col items-center p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-center">
        
      </h1>
      <div className="w-full max-w-full md:max-w-4xl lg:max-w-6xl">
        <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
          <div className="h-[75vh] sm:h-[80vh] md:h-[85vh] lg:h-[90vh] bg-white shadow-lg rounded-lg overflow-hidden">
            <Viewer fileUrl={pdfFile} />
          </div>
        </Worker>
      </div>
    </div>
  );
}

export default PDFViewer;
