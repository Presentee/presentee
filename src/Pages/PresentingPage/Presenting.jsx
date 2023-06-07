import React from 'react'
import './PDF_viewer.css'
import { Viewer, Worker, ScrollMode } from '@react-pdf-viewer/core'
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'
import { scrollModePlugin } from '@react-pdf-viewer/scroll-mode'
import '@react-pdf-viewer/core/lib/styles/index.css'
import '@react-pdf-viewer/default-layout/lib/styles/index.css'
import { PDFDocument } from 'pdf-lib';
import { useEffect, useState } from 'react'
import { Auth } from 'aws-amplify';
import Button from 'CustomComponents/Button';

export default function Presentating(params) {

    const pdfjsVersion = require('pdfjs-dist/package.json').version;
    const workerUrl = `https://unpkg.com/pdfjs-dist@${pdfjsVersion}/build/pdf.worker.min.js`;

    useEffect(() => {
        const runAsync = async () => {
            await modifyPdf();
        };
        runAsync();
    },);


    const [pdfBytes, setPdfBytes] = useState(null);

    const defaultLayoutPluginInstance = defaultLayoutPlugin({
        sidebarTabs: (defaultTabs) => [],
    });

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
            // page.drawText("PresentationID: " + params.roomID, { x: 50, y: 200});

            //draw presentee join message in bold
            page.drawText("Presentee.net/join/5723S", { x: 140, y: 300, size: 40, })

            // add an image to the pdf
            const PngUrl = 'PresenteeDemoQR.png'
            const PngImageBytes = await fetch(PngUrl).then((res) => res.arrayBuffer())
            const PngImage = await pdfDoc.embedPng(PngImageBytes)
            page.drawImage(PngImage, {
                x: 260,
                y: 25,
                width: 200,
                height: 200,
            })
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
                <Worker workerUrl={workerUrl}>
                    {pdfBytes && <>
                        <Viewer enableSmoothScroll={false} fileUrl={pdfBytes} theme="dark" plugins={[defaultLayoutPluginInstance]} />
                    </>}
                    {!pdfBytes && <>No PDF</>}
                </Worker>
            </div>
            <Button>Poll One</Button>
            <Button>View Questions</Button>
        </>
    )
};