import React from 'react'
import './PDF_viewer.css'
import { Viewer, Worker, ScrollMode } from '@react-pdf-viewer/core'
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'
import { scrollModePlugin } from '@react-pdf-viewer/scroll-mode'
import '@react-pdf-viewer/core/lib/styles/index.css'
import '@react-pdf-viewer/default-layout/lib/styles/index.css'
import ThemeContext from 'context/ThemeContext';
import { useContext } from 'react';

export default function ViewPDF(params) {

    const {theme, toggle} = useContext(ThemeContext);

    const pdfjsVersion = require('pdfjs-dist/package.json').version;
    const workerUrl = `https://unpkg.com/pdfjs-dist@${pdfjsVersion}/build/pdf.worker.min.js`;

    const defaultLayoutPluginInstance = defaultLayoutPlugin()
    const scrollModePluginInstance = scrollModePlugin();
    scrollModePluginInstance.switchScrollMode(ScrollMode.Page)

    return (
        <>
            <div className='pdf-container' style={{height: 'calc(100vh - 244px)'}} >
                <Worker workerUrl={workerUrl}>
                    {params.pdfFile && <>
                        <Viewer fileUrl={params.pdfFile} theme={theme} ScrollMode="Page" plugins={[defaultLayoutPluginInstance]} />
                    </>}
                    {!params.pdfFile && <>No PDF</>}
                </Worker>
            </div>
        </>
    )
};