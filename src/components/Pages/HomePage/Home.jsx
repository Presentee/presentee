import React, { useState, useEffect } from 'react';

import NavigationBar from 'components/Navigation';

import Button from 'components/CustomComponents/Button'
import { Storage } from "@aws-amplify/storage"
import { Auth } from 'aws-amplify';
import './Home.css';
import ViewPDF from 'components/CustomComponents/PDFViewer';

import { BiRefresh } from 'react-icons/bi';

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

// Returns an icon for the given file extension
function getIconForExtension(extension) {
  switch (extension) {
    case 'pdf':
      return 'file-pdf-o';
    case 'doc':
    case 'docx':
      return 'file-word-o';
    case 'xls':
    case 'xlsx':
      return 'file-excel-o';
    case 'ppt':
    case 'pptx':
      return 'file-powerpoint-o';
    case 'jpg':
    case 'jpeg':
    case 'png':
    case 'gif':
      return 'file-image-o';
    default:
      return 'file-text-o';
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
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
      {Array.isArray(files) && files.map((file, index) => (
        <Button key={index} onClick={() => retreivePdfFile(file)}>
          {file}
        </Button>
      ))}
    </div>
  );

}



export default function Home(params) {

  // state for the PDF file and response
  const [showFileList, setShowFileList] = useState(true);
  const [response, setResponse] = useState(null);

  //function to refresh the file list
  const refreshFileList = () => {
    setShowFileList(false);
    setShowFileList(true);
  }

  // function to upload a file to S3
  const uploadFile = async (file) => {
    try {
      const user = await Auth.currentAuthenticatedUser(); // get the current authenticated user
      const username = user.username; // get the username of the current authenticated user
      const fileName = `${username}-${file.name}`;
      await Storage.put(fileName, file, { contentType: file.type });
      setResponse(`Successfully uploaded ${fileName}!`);
    } catch (error) {
      setResponse(`Error uploading file: ${error}`);
    }
  }

  // event handler for the file input
  document.addEventListener('DOMContentLoaded', () => {
    const fileInput = document.getElementById('file-input');
    const inputFileLabel = document.querySelector('.input-file-label');

    // update the label when a file is selected
    fileInput.addEventListener('change', () => {
      const fileName = fileInput.value.split('\\').pop();
      if (fileName) {
        inputFileLabel.innerHTML = fileName;
      } else {
        inputFileLabel.innerHTML = 'Choose a file...';
      }
    });
  });

  // function to handle the upload button click
  const handleUploadClick = () => {
    const fileInput = document.getElementById('file-input');
    const selectedFile = fileInput.files[0];

    // upload the file if it exists
    if (selectedFile) {
      uploadFile(selectedFile);
    }
  }


  return (
    <div>
      {/* The navbar that have the navigation routes */}
      <NavigationBar />
      <h1>
        Welcome to Presentee!
      </h1>

      <div style={{ display: 'flex', justifyContent: 'center' }}>

        <div className="custom-file-input-wrapper">
          <input type="file" id="file-input" className="input-file" />
          <label htmlFor="file-input" className="input-file-label">Choose a file...</label>
        </div>

        {/* Button that will send the file to the S3 storage */}
        <Button onClick={handleUploadClick}> send file </Button>
      </div>
      <div>
        {!!response && <div>{response}</div>}
      </div>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <Button onClick={refreshFileList}> <BiRefresh style={{ fontSize: '24px' }} /> </Button>
        {showFileList && <DisplayList setPDFFile={params.setPDFFile}/>}
      </div>

      <ViewPDF pdfFile={params.pdfFile} />

    </div>
  );
}