import React from 'react'
import './App.css'
import {Viewer, Worker} from '@react-pdf-viewer/core'
import {defaultLayoutPlugin} from '@react-pdf-viewer/default-layout'
import '@react-pdf-viewer/core/lib/styles/index.css'
import '@react-pdf-viewer/default-layout/lib/styles/index.css'
function App(){

  const [pdfFile,setPDFFile] = useState(null)
  const [viewPdf, setViewPdf] = useState(null)
// right now only set to pdf future will include pptx
  const allowedType = ['application/pdf']
  const handleChange = (e) => {
    let selectedFile = e.target.files[0]
    if(selectedFile){
      if(selectedFile && allowedType.includes(selectedFile.type))
        let reader = new FileReader()
        reader.readAsDataURL(selectedFile)
        reader.onload = (e) => {
            setPDFFile(e.target.result)
        }
    }
    // if wrong extension then do this
    else{
      setPDFFile(null)
    }
  }
  else{
    console.log("please try again")
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
    <div className = 'container'>
      <form onSubmit = {handleSubmit}>
          <input type = "file" className = 'form-control' onChange = {handleChange}/>
          <button type = 'submit' className = 'btn btn-success'> View Presentee </button>
      </form>

      <h2> View Presentee </h2>
      <div className = 'pdf-container'>
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.15.349/build/pdf.worker.min.js">
          {viewPdf && <>
              <Viewer fileUrl={viewPdf} plugins={[[newplugin]}/>
          </>}
          {!viewPdf && <>No PDF</>}
          </Worker> I
    </div>
  )
}

export default App