// components/Protected.js
import NavigationBar from 'Navigation';
import React, { useState, useEffect } from 'react';
import { ScrollView } from '@aws-amplify/ui-react';
import "./Join.css";
import { useParams, useNavigate } from 'react-router-dom';
import { Storage, DataStore } from 'aws-amplify';
import { Presentation } from 'models';
import { Viewer, Worker, ScrollMode } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { scrollModePlugin } from '@react-pdf-viewer/scroll-mode';
import Button from 'CustomComponents/Button';


export default function Join() {

  let { roomNum: roomID } = useParams();
  let hardcodedRoomID = "34b88d2a-c0e4-4145-9156-ecd9101a39a6";

  const [text, setText] = useState("");
  const [pdfBytes, setPdfBytes] = useState(null);
  const navigate = useNavigate();

  const scrollModePluginInstance = scrollModePlugin();
  scrollModePluginInstance.switchScrollMode(ScrollMode.Page)

  useEffect(() => {
    async function getPresentation(roomID) {
      if (roomID && roomID.toLowerCase() === "f723s") {
        try {
          const presentationData = await DataStore.query(Presentation, hardcodedRoomID);
          console.log('presentationData: ', presentationData)
          const initialPdfBytes = await retreiveFile(presentationData.fileKey);
          setPdfBytes(initialPdfBytes);
        } catch (error) {
          console.error('error getting presentation: ', error);
        }
      }
    }

    // Call the function here
    getPresentation(roomID);

    // You're depending on `roomID` to trigger the effect
  }, [roomID]);


  function handleChange(e) {
    setText(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    navigate(`/join/${text}`);
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


  // if the room number is undefined (i.e. the user has not entered a room number) then display the join page
  if (roomID === undefined) {

    return (
      <>
        <div style={{ marginTop: '30vh' }}>
          <header className="App-header">
            <div>
              Enter Room Code
              <form onSubmit={handleSubmit} >
                <input type="text" style={{ backgroundColor: 'inherit', color: 'inherit' }} onChange={handleChange} />
                <div>
                  <Button type="submit">Join Presentation</Button>
                </div>
              </form>
            </div>
          </header>
        </div>
      </>
    );

  }
  // else if the room number lower cased is equal to "f723s"
  else if (roomID.toLowerCase() === "f723s") {

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

  //if the room number is invalid then display the error page
  else {
    return (
      <>
        <div>
          <h1>We're Sorry, but that room is not open. Please try again</h1>
          <header className="App-header">
            Enter Room Code
            <form onSubmit={handleSubmit}>
              <input type="text" onChange={handleChange} />
              <div>
                <Button type="submit">Join Presentation</Button>
              </div>
            </form>
          </header>
        </div>
      </>
    );

  }
}
