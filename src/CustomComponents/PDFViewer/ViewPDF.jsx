import React from 'react'
import { Worker, Viewer } from '@react-pdf-viewer/core';
import packageJson from '../../../package.json';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { toolbarPlugin } from '@react-pdf-viewer/toolbar';
import './PDF_viewer.css';

export default function ViewPDF(params) {

    const pdfjsWorkerLocation = "https://unpkg.com/pdfjs-dist@" + packageJson.dependencies['pdfjs-dist'] + "/build/pdf.worker.min.js";

    const defaultLayoutPluginInstance = defaultLayoutPlugin(
        {
            sidebarTabs: (defaultTabs) => [],
        }
    );
    const toolbarPluginInstance = toolbarPlugin();
    const { renderDefaultToolbar, Toolbar } = toolbarPluginInstance;

    const transform = (slot) => ({
        ...slot,
        // These slots will be empty
        EnterFullScreen: () => <></>,
        SwitchTheme: () => <></>,
        Zoom: () => <></>,
        ZoomIn: () => <></>,
        ZoomOut: () => <></>,
        ShowSearchPopover: () => <></>,
        Print: () => <></>,
        Open: () => <></>,
        
    });

    return (
        <>
            <div className='pdf-container'>

                <Worker workerUrl={pdfjsWorkerLocation}>
                    {params.pdfFile && <>
                        <Viewer fileUrl={params.pdfFile} plugins={[defaultLayoutPluginInstance]} />
                    </>}
                    {!params.pdfFile && <>No PDF</>}
                </Worker>
            </div>
        </>
    )
};