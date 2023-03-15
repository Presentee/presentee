import React, { useRef, useEffect, useState } from 'react';
import { getDocument } from 'pdfjs-dist/build/pdf';
import * as pdfjs from 'pdfjs-dist/build/pdf';
import NavigationBar from 'Navigation';
import './PdfComponents.css';

pdfjs.GlobalWorkerOptions.workerSrc = `${process.env.PUBLIC_URL}/pdf.worker.js`;
// on pageChange here force the update of the page value
const PdfViewer = ({ file, initialPage = 1, onPageChange }) => {
  const canvasRef = useRef(null);
  const [rotation, setRotation] = useState(0);
  const [pageNumber, setPageNumber] = useState(initialPage);
  const [numPages, setNumPages] = useState(null);

  useEffect(() => {
    const renderPdf = async () => {
      if (!file) {
        return;
      }
//these are the controls of the pdf viewer, the viewport is the actual box that display the pdf
      const loadingTask = getDocument({ url: URL.createObjectURL(file) });
      const pdf = await loadingTask.promise;
      setNumPages(pdf.numPages);

      const page = await pdf.getPage(pageNumber);

      const viewport = page.getViewport({ scale: 1.0, rotation: -page.rotate + rotation });
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');
      canvas.height = viewport.height;
      canvas.width = viewport.width;
//actually rendering the pdf
      const renderContext = {
        canvasContext: context,
        viewport: viewport,
      };

      await page.render(renderContext);
    };

    renderPdf();
//this make sure onPageChange pdf pageNumber changes
    if (onPageChange) {
      onPageChange(pageNumber);
    }

    // on app js this can be used the other way around like so 
    /*
  const handlePageChange = (currentPage) => {
    console.log('Current page:', currentPage);
  };

  return (
    <div className="App">
      <input type="file" onChange={handleFileChange} />
      {file && (
        <PdfViewer
          file={file}
          initialPage={1}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
    */
    
  }, [file, rotation, pageNumber, onPageChange]);
// controlls for rotate, and next and pre page.
  const rotateLeft = () => {
    setRotation(rotation - 90);
  };

  const rotateRight = () => {
    setRotation(rotation + 90);
  };

  const nextPage = () => {
    if (pageNumber < numPages) {
      setPageNumber(pageNumber + 1);
    }
  };

  const prevPage = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  };

  return (
    
    <div className="pdf-viewer">

      <button onClick={rotateLeft}>Rotate Left</button>
      <button onClick={rotateRight}>Rotate Right</button>
      <button onClick={prevPage}>Previous Page</button>
      <button onClick={nextPage}>Next Page</button>
      <div>
        Page {pageNumber} of {numPages}
      </div>
      <canvas ref={canvasRef} />
    </div>
  );
};

export default PdfViewer;
