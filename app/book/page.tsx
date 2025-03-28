// components/PDFViewer.js
"use client"
import { Viewer,Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { useState } from 'react';
import { pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@5.0.375/build/pdf.worker.min.js`
const PDFViewer = () => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  const [pdfUrl] = useState('/pdf/BNBChain EVOAI AGENT.pdf');

  return (
    <div style={{ height: '100dvh' }}>
      <Viewer
          fileUrl={pdfUrl}
          plugins={[defaultLayoutPluginInstance]}
          renderLoader={(percentages) => (
            <div style={{ width: '100%', textAlign: 'center' }}>
              加载中 {Math.round(percentages)}%
            </div>
          )}
        />
    </div>
  );
};

export default PDFViewer;