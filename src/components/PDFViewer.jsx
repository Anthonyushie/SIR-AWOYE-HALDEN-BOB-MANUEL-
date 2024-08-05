import React, { useState, useEffect } from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import { SpecialZoomLevel } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import pdfFile from '../../public/bob-manuel prog.pdf'; // Adjust the path as necessary

function PDFViewer() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 90 ? prev + 10 : prev));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  const handleDocumentLoadSuccess = () => {
    setLoading(false);
    setProgress(100);
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100 p-4">
      <div className="w-full max-w-5xl">
        {/* REMEMBER TO PUT A HEADER HERE  */}
        {/* <h1 className="text-xl font-bold text-center mb-4"></h1> */}

        {loading && (
          <div className="relative w-full mb-4">
            <div className="absolute top-0 left-0 w-full p-2 bg-gray-100 z-10">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200">
                  Loading...
                </span>
                <span className="text-xs font-semibold text-blue-600">
                  {progress}%
                </span>
              </div>
              <div className="mt-2 overflow-hidden h-2 bg-blue-200 rounded">
                <div
                  style={{ width: `${progress}%` }}
                  className="h-full bg-blue-500"
                ></div>
              </div>
            </div>
          </div>
        )}

        <div
          className={`border rounded-lg shadow-lg overflow-hidden ${
            loading ? 'hidden' : 'block'
          }`}
        >
          <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
            <Viewer
              fileUrl={pdfFile}
              onDocumentLoad={handleDocumentLoadSuccess}
              className="w-full h-[calc(100vh-10rem)] max-h-[80vh]"
              defaultScale={SpecialZoomLevel.PageFit}
            />
          </Worker>
        </div>
      </div>
    </div>
  );
}

export default PDFViewer;







// import React from 'react';
// import { Worker, Viewer } from '@react-pdf-viewer/core';
// import '@react-pdf-viewer/core/lib/styles/index.css';
// import '@react-pdf-viewer/default-layout/lib/styles/index.css';
// // import '../../public';
// import pdfFile from '../../public/bob-manuel-prog.pdf';  

// function PDFViewer() {
//     return (
//       <div>
//         <h1>PDF Viewer</h1>
//         <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
//           <Viewer fileUrl={pdfFile} />
//         </Worker>
//       </div>
//     );
//   }
  
//   export default PDFViewer;