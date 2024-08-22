import React from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import pdfFile from '../assets/Bob Manuel Funeral mass.pdf';

function PDFViewer() {
  // Define different scales for different screen sizes
  const defaultScale = window.innerWidth < 768 ? 0.8 : 1.7; // 1.0x zoom for mobile, 2.0x for desktop

  return (
    <div className="flex flex-col items-center p-2 md:p-8 lg:p-12">
      <h1 className="text-xl md:text-3xl lg:text-4xl font-bold mb-4">PDF Viewer</h1>
      <div className="w-full max-w-full md:max-w-5xl">
        <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
          <Viewer
            fileUrl={pdfFile}
            theme="dark"
            defaultScale={defaultScale}
            style={{
              height: '100vh',
              width: '100%',
              margin: '0 auto',
              backgroundColor: '#fff',
            }}
          />
        </Worker>
      </div>
    </div>
  );
}

export default PDFViewer;
