import React, { useRef, useContext } from 'react'
import './PDF_viewer.css'
import { Viewer, Worker, ScrollMode } from '@react-pdf-viewer/core'
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'
import { scrollModePlugin } from '@react-pdf-viewer/scroll-mode'
import '@react-pdf-viewer/core/lib/styles/index.css'
import '@react-pdf-viewer/default-layout/lib/styles/index.css'
import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';
import { useEffect, useState } from 'react'
import { Auth } from 'aws-amplify';
import QRCode, { QRCodeCanvas } from 'qrcode.react'
import { Presentation } from 'models';
import { DataStore } from 'aws-amplify';
import QuestionsModal from './QuestionsModal';
import Button from 'CustomComponents/Button'
import ThemeContext from 'context/ThemeContext';


export default function Presentating(params) {
    const [username, setUsername] = useState('');

    const { theme, toggle } = useContext(ThemeContext);

    const qrRef = useRef(null);

    const pdfjsVersion = require('pdfjs-dist/package.json').version;
    const workerUrl = `https://unpkg.com/pdfjs-dist@${pdfjsVersion}/build/pdf.worker.min.js`;

    const [questionsModalOpen, setQuestionsModalOpen] = useState(false);
    const [presentationID, setPresentationID] = useState(null);

    const toggleQuestionsModal = () => {
        setQuestionsModalOpen(!questionsModalOpen);
    }

    // check if user is logged in
    useEffect(() => {
        async function checkUser() {
            const user = await Auth.currentAuthenticatedUser();

            // if user is not logged in
            if (!user) {
                setUsername('');
            }
            else {
                setUsername(user.username);
            }
        }
        checkUser();

        const runAsync = async () => {
            await modifyPdf();
        };
        runAsync();

        const getPdfID = async () => {
            try {
                const presentations = await DataStore.query(Presentation, (c) => c.ShortCode.eq(params.roomID));
                setPresentationID(presentations[0].id);
            } catch (error) {
                console.log("Presentation ID invalid, can't retreive questions" +error);
            }
        }
        getPdfID();

    }, []);

    const getQrUrl = () => {
        if (qrRef.current) {

            const canvas = qrRef.current.querySelector('canvas');
            const pngUrl = canvas.toDataURL("image/png");
            return pngUrl;
        }
    }

    // set states for the pdf viewer
    const [pdfBytes, setPdfBytes] = useState(null);
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
                    zoom(2.4);
                    defaultLayoutPluginInstance.toolbarPluginInstance.scrollModePluginInstance.switchScrollMode(
                        ScrollMode.Vertical
                    );
                },
            },
        },
    });

    const scrollModePluginInstance = scrollModePlugin();
    scrollModePluginInstance.switchScrollMode(ScrollMode.Page)


    // function to modify the pdf to add the QR code and the join message
    async function modifyPdf() {
        try {
            // fetch existing PDF
            const existingPdfBytes = await fetch(params.pdfFile).then(res => res.arrayBuffer())
            const pdfDoc = await PDFDocument.load(existingPdfBytes)

            let presentationName = pdfDoc.getTitle()
            if (!presentationName) {
                presentationName = "Join now using the link!"
            }

            // embed font
            const font = await pdfDoc.embedFont(StandardFonts.Helvetica);

            // get first page size
            const firstPage = pdfDoc.getPages()[0]
            const { width, height } = firstPage.getSize()

            const page = pdfDoc.insertPage(0, [width, height])

            // get QR code image
            const PngImageBytes = await fetch(getQrUrl()).then((res) => res.arrayBuffer())
            const PngImage = await pdfDoc.embedPng(PngImageBytes)

            // set font sizes and positions 
            const titleFontSize = 45
            const textWidth = font.widthOfTextAtSize(presentationName, titleFontSize);
            const codeX = width / 2 - 200
            const codeY = 255

            page.drawText(presentationName, { x: (width / 2) - (textWidth / 2), y: height - 80, size: titleFontSize })

            //draw presentee join message
            page.drawText("Presentee.net/join/", { x: codeX, y: codeY, size: 30 })
            page.drawText(params.roomID, { x: codeX + 250, y: codeY, size: 40 })

            // draw QR code
            page.drawImage(PngImage, { x: width / 2 - 100, y: 25, width: 200, height: 200 })

            setPdfBytes('data:application/pdf;base64,' + await pdfDoc.saveAsBase64())
        } catch (error) {
            console.error('Error modifying PDF:', error);
        }
    }

    return (
        <>
            {/* <div>ID: {params.roomID}</div> */}
            <div className='pdf-container' style={{ maxHeight: '85vh', height: '85vh' }}>
                <Worker workerUrl={workerUrl}>
                    {pdfBytes && <>
                        <Viewer enableSmoothScroll={false} fileUrl={pdfBytes} theme={theme} plugins={[defaultLayoutPluginInstance]} />
                    </>}
                    {!pdfBytes && <>No PDF</>}
                </Worker>
            </div>

            <QuestionsModal modalOpen={questionsModalOpen} toggleModal={toggleQuestionsModal} presentationID={presentationID}/>
            <Button onClick={toggleQuestionsModal} style={{ marginTop: '15px' }}>Questions</Button>

            <div ref={qrRef} style={{ display: 'none' }}>
                <QRCodeCanvas
                    value={"Presentee.net/join/" + params.roomID}
                    bgColor={"#ffffff"}
                    fgColor={"#000000"}
                    size={800}
                    level={"H"} // L, M, Q, H error correction level
                    includeMargin={false}
                    imageSettings={{
                        src: "presenteeLogo3.png",
                        x: undefined,
                        y: undefined,
                        height: 200,
                        width: 200,
                        excavate: true,
                    }}
                />
            </div>
        </>
    )
};