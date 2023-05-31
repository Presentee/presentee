import React from 'react'
import './Presenting.css'
import { Viewer, Worker, ScrollMode } from '@react-pdf-viewer/core'
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'
import { scrollModePlugin } from '@react-pdf-viewer/scroll-mode'
import '@react-pdf-viewer/core/lib/styles/index.css'
import '@react-pdf-viewer/default-layout/lib/styles/index.css'

const pdfjsVersion = require('pdfjs-dist/package.json').version;
const workerUrl = `https://unpkg.com/pdfjs-dist@${pdfjsVersion}/build/pdf.worker.min.js`;

export default function Presentating(params) {

    const newplugin = defaultLayoutPlugin()
    const scrollModePluginInstance = scrollModePlugin();
    scrollModePluginInstance.switchScrollMode(ScrollMode.Page)


    return (
        <>
            <div className='pdf-container'>
                {/*The workerURL now should update whenever the version updates */}
                <Worker workerUrl={workerUrl}>
                    {params.pdfFile && <>
                        <Viewer fileUrl={params.pdfFile} plugins={[scrollModePluginInstance, newplugin]}/>
                    </>}
                    {!params.pdfFile && <>No PDF</>}
                </Worker>
            </div>

            
        </>
    )
};