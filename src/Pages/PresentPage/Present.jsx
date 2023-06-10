import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import './Present.css';
import VContainer, { HomeContainer } from 'CustomComponents/Containers';
import Button from 'CustomComponents/Button';
import ViewPDF from 'CustomComponents/PDFViewer';
import NavigationBar from 'Navigation';
import { createPresentation } from "graphql/mutations";
import { listPresentations } from "graphql/queries";
import { DataStore } from 'aws-amplify';
import { Presentation } from 'models';
import BlobToByte64 from 'CustomComponents/BlobToByte64';

import { Auth, API, Storage } from 'aws-amplify';
import { BiRefresh, BiTrash, BiListUl, BiCategory } from 'react-icons/bi';

export default function Present(params) {

  // state for the PDF file and response
  const [showFileList, setShowFileList] = useState(true);

  // const [response, setResponse] = useState(null);
  const navigate = useNavigate();

  //function to refresh the file list
  const refreshFileList = () => {
    navigate('/present');
  }

  // handle present button click
  async function handlePresent(params) {
    navigate('/presenting');
  }

  // function to retreive listed file from S3 and set the state of the PDF file
  const retrievePdfFile = async (fileName) => {
    try {
      // get the current user's username
      const user = await Auth.currentAuthenticatedUser();
      const username = user.username;

      // create the file key and retrieve the file from S3
      const fileKey = `${username}-${fileName}`;
      const result = await Storage.get(fileKey, {
        download: true,
        level: 'public',
      });

      //get shortCode from datastore
      const presentation = await DataStore.query(Presentation, (c) => c.PresentationKey.eq(fileKey));
      const shortCode = presentation[0].ShortCode;
      params.setRoomID(shortCode);

      // convert the file to a base64 string
      const retrievedPDFFile = await BlobToByte64(result.Body);

      // set the state of the PDF file to the retrieved file
      params.setPDFFile(retrievedPDFFile);
    } catch (error) {
      console.error("Failed to retreive PDF file: " + error);
    }
  };

  // display the list of files
  function PdfList(params) {
    const [files, setFiles] = useState([]);

    // function to get the list of files from S3
    useEffect(() => {
      const fetchFiles = async () => {
        try {

          // get the list of files from S3
          const fileList = await listFiles();

          // set the state of the filesList
          setFiles(fileList);
        } catch (error) {
          console.error("Failed to fetch file list: " + error);
        }
      };

      fetchFiles();
    }, []);

    // generate a list of files and buttons
    return (
      <>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {Array.isArray(files) && files.map((fileName, index) => (
            <div key={index + " - " + fileName} style={{ display: 'flex', flexDirection: 'row' }}>
              <Button style={{ maxWidth: '400px', overflow: 'hidden' }} onClick={() => retrievePdfFile(fileName)}>
                {fileName}
              </Button>
              {/* <Button><BiListUl style={{ fontSize: '20px' }} /></Button> */}
              {/* <Button><BiCategory style={{ fontSize: '20px' }} /></Button> */}
              <Button onClick={() => handleDelete(fileName)}><BiTrash style={{ fontSize: '20px' }} /></Button>
            </div>
          ))}
        </div>
      </>
    );
  }

  // This is the function that will list the files in the S3 storage
  async function listFiles() {
    try {

      // get the current user's username
      const user = await Auth.currentAuthenticatedUser();
      const username = user.username;
      const fileList = await Storage.list(`${username}-`, { pageSize: 1000 });

      //remove the username from the results
      fileList.results.forEach((file) => {
        file.key = file.key.replace(`${username}-`, '');
      });

      const fileNames = fileList.results.map((file) => file.key);

      return fileNames;

    } catch (error) {
      console.log('Error listing files: ', error);
    }
  }

  // delete files
  const handleDelete = async (fileName) => {
    try {
      // get the current user's username
      const user = await Auth.currentAuthenticatedUser();
      const username = user.username;

      // create the file key and delete the file from S3
      const fileKey = `${username}-${fileName}`;
      await Storage.remove(fileKey, {
        level: 'public',
      });

      // delete the presentation from datastore
      const presentation = await DataStore.query(Presentation, (c) => c.PresentationKey.eq(fileKey));
      await DataStore.delete(presentation[0]);

      refreshFileList();

    } catch (error) {
      console.error("Failed to delete PDF file: " + error);
    }
  };


  return (
    <>
      <HomeContainer style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', maxWidth: '1800px' }}>
        <div style={{ margin: '10px', maxWidth: 'max-width: 1400px' }}>

          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', maxWidth: '800px', overflow: 'clip' }}>
            <Button onClick={refreshFileList}> <BiRefresh style={{ fontSize: '24px' }} /> </Button>
            {showFileList && <PdfList setPDFFile={params.setPDFFile} />}
          </div>
        </div>

        <div style={{ width: '100%', maxWidth: '1000px' }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Button onClick={() => handlePresent(params.setRoomID)} style={{ margin: '10px' }}>Present Presentation</Button>
            <h1>Preview</h1>
            <ViewPDF pdfFile={params.pdfFile} />
          </div>
        </div>
      </HomeContainer>

    </>
  );
} 
