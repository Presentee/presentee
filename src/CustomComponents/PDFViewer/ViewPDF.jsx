import React from 'react'
import './PDF_viewer.css'
import { Viewer, Worker, ScrollMode } from '@react-pdf-viewer/core'
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'
import { scrollModePlugin } from '@react-pdf-viewer/scroll-mode'
import '@react-pdf-viewer/core/lib/styles/index.css'
import '@react-pdf-viewer/default-layout/lib/styles/index.css'
import ThemeContext from 'context/ThemeContext';
import { useContext, useEffect } from 'react';


export default function ViewPDF(params) {

    const { theme, toggle } = useContext(ThemeContext);

    const pdfjsVersion = require('pdfjs-dist/package.json').version;
    const workerUrl = `https://unpkg.com/pdfjs-dist@${pdfjsVersion}/build/pdf.worker.min.js`;

    const defaultLayoutPluginInstance = defaultLayoutPlugin({
        sidebarTabs: (defaultTabs) => [],
        toolbarPlugin: {
            fullScreenPlugin: {
                onEnterFullScreen: (zoom) => {
                    zoom(2.66);
                    defaultLayoutPluginInstance.toolbarPluginInstance.scrollModePluginInstance.switchScrollMode(
                        ScrollMode.Page
                    );
                },
                onExitFullScreen: (zoom) => {
                    zoom(1.3);
                    defaultLayoutPluginInstance.toolbarPluginInstance.scrollModePluginInstance.switchScrollMode(
                        ScrollMode.Vertical
                    );
                },
            },
        },
    });

    const scrollModePluginInstance = scrollModePlugin();
    scrollModePluginInstance.switchScrollMode(ScrollMode.Vertical)

    return (
        <>
            <div className='pdf-container' style={params.style} >
                <Worker workerUrl={workerUrl}>
                    {params.pdfFile && <>
                        <Viewer 
                          fileUrl={params.pdfFile} 
                          theme={theme} 
                          plugins={[defaultLayoutPluginInstance, scrollModePluginInstance]}
                        />
                    </>}
                    {!params.pdfFile && <>No PDF</>}
                </Worker>
            </div>
        </>
    );
    
};