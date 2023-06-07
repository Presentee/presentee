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

import { Auth, API, Storage } from 'aws-amplify';
import { BiRefresh, BiTrash, BiListUl, BiCategory } from 'react-icons/bi';

let globalFileKey = '';
let globalFileName = '';

// This is the function that will retreive the file from the S3 storage
async function retreiveFile(fileName) {
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

    globalFileKey = fileKey;
    globalFileName = fileName;

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

    const files = fileList.results.map((file) => file.key);

    return files;

  } catch (error) {
    console.log('Error listing files: ', error);
  }
}

// display the list of files
function DisplayList(params) {
  const [files, setFiles] = useState([]);

  // get the list of files from S3
  useEffect(() => {
    const fetchFiles = async () => {
      const fileList = await listFiles();
      setFiles(fileList);
    };
    fetchFiles();
  }, []);

  // function to retreive listed file from S3 and set the state of the PDF file
  const retreivePdfFile = async (file) => {
    const returnedPDF = await retreiveFile(file);
    params.setPDFFile(returnedPDF);
  };

  // display the list of files
  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column'}}>
        {Array.isArray(files) && files.map((file, index) => (
          <div style={{ displau: 'flex', flexDirection: 'row'}}>
            <Button key={index} style={{ maxWidth: '400px', overflow: 'hidden' }} onClick={() => retreivePdfFile(file)}>
              {file}
            </Button>
            <Button><BiListUl style={{ fontSize: '20px' }} /></Button>
            <Button><BiCategory style={{ fontSize: '20px' }} /></Button>
            <Button><BiTrash style={{ fontSize: '20px' }} /></Button>
          </div>
        ))}
      </div>
    </>
  );

}

export default function Present(params) {

  // state for the PDF file and response
  const [showFileList, setShowFileList] = useState(true);
  // const [response, setResponse] = useState(null);
  const navigate = useNavigate();

  //function to refresh the file list
  const refreshFileList = () => {
    setShowFileList(false);
    setShowFileList(true);
  }

  // handle present button click
  async function handlePresent(params) {

    // if globalFileKey or globalFileName are empty retrerive the file
    if (globalFileKey === '' || globalFileName === '') {
      console.error("presentation not loaded");

      //reload page
      window.location.reload();
    }
    else {

      // create the presentation in the database
      try {
        const newPresentation = await API.graphql({
          query: createPresentation,
          variables: {
            input: {
              "PresentationKey": globalFileKey,
              "Name": globalFileName,
              "PageNum": 0,
            }
          }
        });

        // navigate to the presenting page
        navigate('/presenting');

        params(newPresentation.data.createPresentation.id);
      } catch (error) {
        console.error("Error handling presentation: ", error);
      }
    }
  }


  return (
    <>
      <NavigationBar />

      <HomeContainer style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', maxWidth: '1800px' }}>
        <div style={{ margin: '10px', maxWidth: 'max-width: 1400px' }}>

          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', maxWidth: '800px', overflow: 'clip' }}>
            <Button onClick={refreshFileList}> <BiRefresh style={{ fontSize: '24px' }} /> </Button>
            {showFileList && <DisplayList setPDFFile={params.setPDFFile} />}
          </div>
        </div>

        <div style={{ width: '100%', maxWidth: '1000px' }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Button onClick={() => handlePresent(params.setRoomID)} style={{ margin: '10px' }}>Present Presentation</Button>
            <h1>Preview</h1>
            <ViewPDF style={{ display: 'flex', flexDirection: 'row', flex: '1' }} pdfFile={params.pdfFile} />
          </div>
        </div>
      </HomeContainer>

    </>
  );
} 
