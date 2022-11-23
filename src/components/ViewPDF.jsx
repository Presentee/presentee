import React, {useState} from 'react'
import './PDF_viewer.css'
import {Viewer, Worker} from '@react-pdf-viewer/core'
import {defaultLayoutPlugin} from '@react-pdf-viewer/default-layout'
import '@react-pdf-viewer/core/lib/styles/index.css'
import '@react-pdf-viewer/default-layout/lib/styles/index.css'

export default function ViewPDF(params) {

    const [viewPdf, setViewPdf] = useState(null)

    const handleSubmit = (e) => {
        e.preventDefault()
        // if pdf file is not null
        if(params.pdfFile !== null){
          setViewPdf(params.pdfFile)
        }
        else {
          setViewPdf(null)
        }
      }

      const newplugin= defaultLayoutPlugin()

    return (
        <div>
            <form onSubmit={handleSubmit} class="button">
                <button type='submit' className='btn btn-success'> View Presentee </button>
            </form>

            <div className='pdf-container'>
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.15.349/build/pdf.worker.min.js">
                    {viewPdf && <>
                        <Viewer fileUrl={viewPdf} plugins={[newplugin]} />
                    </>}
                    {!viewPdf && <>No PDF</>}
                </Worker>
            </div>
        </div>

    )
};