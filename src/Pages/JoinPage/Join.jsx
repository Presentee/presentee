// components/Protected.js
import NavigationBar from 'Navigation';
import React, { useState, useEffect } from 'react';
import { ScrollView } from '@aws-amplify/ui-react';
import QRCode from "react-qr-code";
import "./Join.css";
import Button from 'CustomComponents/Button';
import { useNavigate, useParams } from "react-router-dom";
import { API, Storage } from "aws-amplify";
import { DataStore } from '@aws-amplify/datastore';
import { Presentation } from 'models';
import { Viewer, Worker, ScrollMode } from '@react-pdf-viewer/core'
import { scrollModePlugin } from '@react-pdf-viewer/scroll-mode'
import '@react-pdf-viewer/core/lib/styles/index.css'
import '@react-pdf-viewer/default-layout/lib/styles/index.css'

export default function Join() {

  let { roomNum } = useParams();

  if (roomNum === undefined) {

    const [text, setText] = useState("");
    const navigate = useNavigate();

    function handleChange(e) {
      setText(e.target.value);
    }

    function handleSubmit(e) {
      e.preventDefault();
      navigate(`/join/${text}`);
    }

    const qrCodeValue = `www.presentee.net/join/${text}`; // construct the QR code value using the "www.presentee.net/join/" string and the text state variable
    const qrCodeUrl = `https://${qrCodeValue}`; // construct the URL linked to the QR code by adding the "https://" protocol

    return (
      <div className="App">
        <NavigationBar />
        <ScrollView>
          <header className="App-header">
            {/* <QRCode value={qrCodeValue} /> */}
            {/* <a href={qrCodeUrl} target="_blank" rel="noopener noreferrer">{qrCodeUrl}</a> */}
            <div className="App-link">
              Enter Room Code
              <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange} />
                <div>
                  <Button type="submit">Join Presentation</Button>
                </div>
              </form>
            </div>
          </header>
        </ScrollView>
      </div>
    );

  }
  else {

    const scrollModePluginInstance = scrollModePlugin();
    scrollModePluginInstance.switchScrollMode(ScrollMode.Page)

    const [pdfBytes, setPdfBytes] = useState(null);

    useEffect(() => {
      getPresentation(roomNum);
    }, []);

    // get the presentation that matches the room number
    async function getPresentation(roomNum) {
      const presentationData = await DataStore.query(Presentation, roomNum);
      setPdfBytes(await retreiveFile(presentationData.PresentationKey));
    }

    // This is the function that will retreive the file from the S3 storage
    async function retreiveFile(fileKey) {
      try {

        const result = await Storage.get(fileKey, {
          download: true,
          level: 'public',
        });
    
        // convert the pdf data to a base64 string
        const pdfData = result.Body;
        const reader = new FileReader();
        const base64PDFData = await new Promise((resolve, reject) => {
    
          // setup event listeners to handle the file reading
          reader.onloadend = () => {
            const base64String = reader.result.split(',')[1];
            resolve(base64String);
          };
    
          // handle errors
          reader.onerror = () => {
            reject(reader.error);
          };
    
          // read the file as a data url
          reader.readAsDataURL(pdfData);
        });
    
        //add the pdf header to the base64 string
        const base64PDF = 'data:application/pdf;base64,' + base64PDFData;
    
        // return the base64 string
        return base64PDF;
    
      } catch (error) {
        console.log('Error listing files: ', error);
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

  }
}
