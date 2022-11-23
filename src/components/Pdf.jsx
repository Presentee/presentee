import React, {useState} from 'react'
import './PDF_viewer.css'
import '@react-pdf-viewer/core/lib/styles/index.css'
import '@react-pdf-viewer/default-layout/lib/styles/index.css'
import FileUpload from './components/FileUpload'
import ViewPDF from './components/ViewPDF'

function Pdf(){

  const [pdfFile,setPDFFile] = useState(null)

  return (
    <div className = 'container'>

      {/* Fileupload Box */}
      <FileUpload setPDFFile={setPDFFile} />

      <h2> View Presentee </h2>

      {/* View PDF Box */}
      <ViewPDF pdfFile={pdfFile} />
      
    </div>
  )
}

export default Pdf;
