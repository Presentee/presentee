import React from 'react'
import './PDF_viewer.css'
import { Viewer, Worker, ScrollMode } from '@react-pdf-viewer/core'
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'
import { scrollModePlugin } from '@react-pdf-viewer/scroll-mode'
import '@react-pdf-viewer/core/lib/styles/index.css'
import '@react-pdf-viewer/default-layout/lib/styles/index.css'

export default function ViewPDF(params) {

    const newplugin = defaultLayoutPlugin()
    const scrollModePluginInstance = scrollModePlugin();
    scrollModePluginInstance.switchScrollMode(ScrollMode.Page)

    return (
        <>
            <div className='pdf-container'>
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.15.349/build/pdf.worker.min.js">
                    {params.pdfFile && <>
                        <Viewer fileUrl={params.pdfFile} plugins={[newplugin, scrollModePluginInstance]}/>
                    </>}
                    {!params.pdfFile && <>No PDF</>}
                </Worker>
            </div>
        </>
    )
};