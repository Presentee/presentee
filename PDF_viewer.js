import React, {useState} from 'react'
import './PDF_viewer.css'
import {Viewer, Worker} from '@react-pdf-viewer/core'
import {defaultLayoutPlugin} from '@react-pdf-viewer/default-layout'
import '@react-pdf-viewer/core/lib/styles/index.css'
import '@react-pdf-viewer/default-layout/lib/styles/index.css'
function PDF_viewer(){

  const [pdfFile,setPDFFile] = useState(null)
  const [viewPdf, setViewPdf] = useState(null)
// right now only set to pdf future will include pptx
  const allowedType = ['application/pdf']
  const handleChange = (e) => {
    // this is the local upload section, change if running on aws with s3
    let selectedFile = e.target.files[0]
    if(selectedFile){
      if(selectedFile && allowedType.includes(selectedFile.type)){
        var reader = new FileReader()
        reader.readAsDataURL(selectedFile)
        reader.onload = (e) => {
            setPDFFile(e.target.result)
        }
      }
      else{
        setPDFFile(null)
      }
    }
    // if wrong extension then do this
  else{
    console.log("please try again")
  }
}

  const handleSubmit = (e) => {
    e.preventDefault()
    // if pdf file is not null
    if(pdfFile !== null){
      setViewPdf(pdfFile)
    }
    else {
      setViewPdf(null)
    }
  }
  const newplugin= defaultLayoutPlugin()
  return (
    //change the jsx if you don't need to upload it locally
    <div className = 'container'>
      <form onSubmit = {handleSubmit}>
          <input type = "file" className = 'form-control' onChange = {handleChange}/>
          <button type = 'submit' className = 'btn btn-success'> View Presentee </button>
      </form>

      <h2> View Presentee </h2>
      <div className = 'pdf-container'>
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.15.349/build/pdf.worker.min.js">
              {viewPdf && <>
                  <Viewer fileUrl={viewPdf} plugins={[newplugin]}/>
              </>}
              {!viewPdf && <>No PDF</>}
          </Worker>
          </div>
    </div>
  )
}

export default PDF_viewer
