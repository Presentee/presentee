// components/Protected.js
import React, { useState, useEffect } from 'react';
import "./Join.css";
import { useParams, useNavigate } from 'react-router-dom';
import { Storage, DataStore } from 'aws-amplify';
import { Presentation } from 'models';
import { Viewer, Worker, ScrollMode } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { scrollModePlugin } from '@react-pdf-viewer/scroll-mode';
import Button from 'CustomComponents/Button';
import BlobToByte64 from 'CustomComponents/BlobToByte64';


export default function Join() {

  const pdfjsVersion = require('pdfjs-dist/package.json').version;
  const workerUrl = `https://unpkg.com/pdfjs-dist@${pdfjsVersion}/build/pdf.worker.min.js`;

  let { roomNum: roomID } = useParams();
  const [validRoomID, setValidRoomID] = useState(null);

  const [text, setText] = useState("");
  const [pdfBytes, setPdfBytes] = useState(null);
  const navigate = useNavigate();

  const scrollModePluginInstance = scrollModePlugin();
  scrollModePluginInstance.switchScrollMode(ScrollMode.Page)

  useEffect(() => {

    // get valid roomIDs from the database
    async function validateRoomID() {
      try {
        const presentations = await DataStore.query(Presentation, (c) => c.ShortCode.eq(roomID));
        if (presentations.length === 1) {
          setValidRoomID(roomID);

          // get the file from S3
          const fileKey = presentations[0].PresentationKey;
          const result = await Storage.get(fileKey, {
            download: true,
            level: 'public',
          });

          // convert the file to a base64 string
          const pdfFile = await BlobToByte64(result.Body);
          setPdfBytes(pdfFile);

        }
      }
      catch (error) {
        console.error("An error occurred while checking the code: ", error);
      }
    }
    // get the valid room IDs
    validateRoomID();

  }, []);


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

      // get the file from S3
      const result = await Storage.get(fileKey, {
        download: true,
        level: 'public',
      });

      // convert the file to a base64 string
      return BlobToByte64(result.Body);

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
  else if (validRoomID) {

    return (
      <>
        <div className='pdf-container'>
          <Worker workerUrl={workerUrl}>
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
