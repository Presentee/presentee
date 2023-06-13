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
import ViewPDF from 'CustomComponents/PDFViewer';
import QuestionModal from './QuestionModal';


export default function Join() {

  let { roomNum: roomID } = useParams();

  const [validRoomID, setValidRoomID] = useState(false);
  const [text, setText] = useState("");
  const [activePDFFile, setActivePDFFile] = useState(null);
  const navigate = useNavigate();
  const [presentationID, setPresentationID] = useState(null);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [roomIDReady, setRoomIDReady] = useState(false);

  //toggle the modal
  const toggleModal = () => {
    setModalOpen(!modalOpen);
  }

  useEffect(() => {

    // get valid roomIDs from the database
    async function validateRoomID() {

      if(roomID == undefined){
        setLoading(false);
        return;
      }

      // check if the room ID is defined
      // check if the room ID exists in the database
      for (let index = 0; index < 5; index++) {
        const presentations = await DataStore.query(Presentation, (c) => c.ShortCode.eq(roomID.toUpperCase()));

        // if the room ID exists, then set the state of the PDF file
        if (presentations.length == 1) {

          setPresentationID(presentations[0].id);
          setLoading(false);
          setValidRoomID(roomID.toUpperCase());

          // get the file from S3
          const fileKey = presentations[0].PresentationKey;
          const result = await Storage.get(fileKey, {
            download: true,
            level: 'public',
          });

          // convert the file to a base64 string
          const pdfFile = await BlobToByte64(result.Body);
          setActivePDFFile(pdfFile);

          break;
        }
        else {
          console.error("Invalid room ID: " + roomID);
          setActivePDFFile(null);
          setValidRoomID(false);
        }

        // pause for 1 second
        await new Promise((resolve) => setTimeout(resolve, 1000));
      }
      setLoading(false);
    }

    // call the function to validate the room ID
    validateRoomID();
  }, [roomID]);


  function handleChange(e) {
    setText(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    navigate(`/join/${text}`);
  }

  return (
    <>
      {!validRoomID && !loading &&
        <div style={{ marginTop: '30vh' }}>
          {(roomID != undefined) &&
            <h1>We're Sorry, but that room is not open. Please try again</h1>
          }
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
      }
      {validRoomID && !loading &&
        <>
          <ViewPDF pdfFile={activePDFFile} style={{ maxHeight: '85vh' }} />
          <QuestionModal modalOpen={modalOpen} toggleModal={toggleModal} presentationID={presentationID} />
          <Button onClick={() => setModalOpen(true)} style={{ marginTop: '15px' }}>Ask a Question</Button>
          <div> Use alt + arrow keys or pageup and pagedown to navigate pages in fullscreen</div>
        </>
      }
      {loading &&
        <div style={{ marginTop: '30vh' }}>
          <h1>Loading...</h1>
        </div>
      }
    </>
  );
}
