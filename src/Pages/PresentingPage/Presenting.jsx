import React from 'react'
import './PDF_viewer.css'
import { Viewer, Worker, ScrollMode } from '@react-pdf-viewer/core'
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'
import { scrollModePlugin } from '@react-pdf-viewer/scroll-mode'
import '@react-pdf-viewer/core/lib/styles/index.css'
import '@react-pdf-viewer/default-layout/lib/styles/index.css'
import { degrees, PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import { useEffect, useState } from 'react'

export default function Presentating(params) {

    useEffect(() => {
        const runAsync = async () => {
            await modifyPdf();
        };
        
        runAsync();
    }, []);
    

    const [pdfBytes, setPdfBytes] = useState(null);

    const newplugin = defaultLayoutPlugin()
    const scrollModePluginInstance = scrollModePlugin();
    scrollModePluginInstance.switchScrollMode(ScrollMode.Page)

    async function modifyPdf() {
        try {
            const existingPdfBytes = await fetch(params.pdfFile).then(res => res.arrayBuffer())
            const pdfDoc = await PDFDocument.load(existingPdfBytes)


            // get first page size
            const firstPage = pdfDoc.getPages()[0]
            const { width, height } = firstPage.getSize()

            const page = pdfDoc.addPage([width, height])
            page.drawText("PresentationID: " + params.roomID, { x: 50, y: 200});
            // page.drawRectangle({ x: 50, y: 200, width: 500, height: 100, borderWidth: 1 })
            pdfDoc.insertPage(0, page)

            setPdfBytes('data:application/pdf;base64,' + await pdfDoc.saveAsBase64());
        } catch (error) {
            console.error('Error modifying PDF:', error);
        }
    }


    return (
        <>
            {/* <div>ID: {params.roomID}</div> */}
            <div className='pdf-container'>
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.15.349/build/pdf.worker.min.js">
                    {pdfBytes && <>
                        <Viewer fileUrl={pdfBytes} plugins={[scrollModePluginInstance]} />
                    </>}
                    {!pdfBytes && <>No PDF</>}
                </Worker>
            </div>
        </>
    )
};