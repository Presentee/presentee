import React from 'react'
import './PDF_viewer.css'
import { Viewer, Worker } from '@react-pdf-viewer/core'
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'
import '@react-pdf-viewer/core/lib/styles/index.css'
import '@react-pdf-viewer/default-layout/lib/styles/index.css'

export default function ViewPDF(params) {

    const newplugin = defaultLayoutPlugin()

    return (
        <>
        <div className='pdf-container'>
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.15.349/build/pdf.worker.min.js">
                    {params.pdfFile && <>
                        <Viewer fileUrl={params.pdfFile} plugins={[newplugin]} />
                    </>}
                    {!params.pdfFile && <>No PDF</>}
                </Worker>
            </div>
        </>
    )
};