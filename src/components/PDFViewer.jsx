import React from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import pdfFile from '../assets/bob-manuel-prog.pdf';  // Adjust the path as necessary
import '../App.css'; // Import global CSS file if needed

function PDFViewer() {
  return (
    <div className="flex flex-col items-center p-4 md:p-8 lg:p-12">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">PDF Viewer</h1>
      <div className="w-full max-w-3xl">
        <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
          <Viewer
            fileUrl={pdfFile}
            theme="dark"
          />
        </Worker>
      </div>
    </div>
  );
}

export default PDFViewer;
