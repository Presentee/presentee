import React from 'react'
import ViewPDF from './ViewPDF'
import './PDF_viewer.css'
import '@react-pdf-viewer/core/lib/styles/index.css'
import '@react-pdf-viewer/default-layout/lib/styles/index.css'


function Pdf(params) {
  return (
    <>
      <ViewPDF pdfFile={params.pdfFile} />
    </>
  )
}

export default Pdf;
