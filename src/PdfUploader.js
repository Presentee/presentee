import React, { useState } from 'react';
import PdfViewer from './PdfViewer';
import './PdfComponents.css';

const PdfUploader = () => {
  const [pdfFile, setPdfFile] = useState(null);

  const onFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type === 'application/pdf') {
      setPdfFile(file);
    } else {
      alert('Please upload a valid PDF file');
    }
  };

  return (
    <div className="pdf-uploader">
      <input type="file" accept="application/pdf" onChange={onFileChange} />
      {pdfFile && <PdfViewer file={pdfFile} />}
    </div>
  );
};

export default PdfUploader;
