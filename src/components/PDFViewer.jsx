import React from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import pdfFile from '../assets/bob-manuel-prog.pdf';  // Adjust the path as necessary
import '../App.css'; // Import global CSS file if needed

function PDFViewer() {
  return (
    <div className="flex flex-col items-center p-2 md:p-8 lg:p-12">
      <h1 className="text-xl md:text-3xl lg:text-4xl font-bold mb-4">PDF Viewer</h1>
      <div className="w-full max-w-full md:max-w-3xl"> {/* Full width for mobile, restricted for desktop */}
        <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
          <Viewer
            fileUrl={pdfFile}
            theme="dark"
            style={{
              height: 'calc(100vh - 150px)', // Dynamic height
              width: '100%', // Full width
              border: 'none', // Remove border
            }}
          />
        </Worker>
      </div>
    </div>
  );
}

export default PDFViewer;
