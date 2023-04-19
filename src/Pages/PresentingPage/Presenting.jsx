import React from 'react'
import './Presenting_viewer.css'
import { Viewer, Worker, ScrollMode } from '@react-pdf-viewer/core'
import packageJson from '../../../package.json';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { scrollModePlugin } from '@react-pdf-viewer/scroll-mode';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

export default function Presentating(params) {

    const scrollModePluginInstance = scrollModePlugin();

    const pdfjsWorkerLocation = "https://unpkg.com/pdfjs-dist@" + packageJson.dependencies['pdfjs-dist'] + "/build/pdf.worker.min.js";

    const defaultLayoutPluginInstance = defaultLayoutPlugin(
        {
            sidebarTabs: (defaultTabs) => [],
        }
    );

    return (
        <>
            {/* next page button */}
            <Button variant="contained" color="primary" onClick={nextPage()}>Next Page</Button>
            {/* previous page button */}
            <Button variant="contained" color="primary" onClick={prevPage()}>Previous Page</Button>
            <div className='pdf-container'>
                <Worker workerUrl={pdfjsWorkerLocation}>
                    {params.pdfFile && <>
                        <Viewer fileUrl={params.pdfFile} plugins={[scrollModePluginInstance, defaultLayoutPluginInstance]} scrollMode={ScrollMode.Page} />
                    </>}
                    {!params.pdfFile && <>No PDF</>}
                </Worker>
            </div>
        </>
    )
};