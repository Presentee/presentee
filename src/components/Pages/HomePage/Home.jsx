// ----------------- IMPORTS ---------------------------
import React, { useState, useEffect } from 'react';

import NavigationBar from 'components/Navigation';
import VContainer from 'components/CustomComponents/Containers';
import HContainer from 'components/CustomComponents/Containers';

import Button from 'components/CustomComponents/Button'
import { Storage } from "@aws-amplify/storage"
import { Auth } from 'aws-amplify'; // import the Auth module from aws-amplify
import './Home.css';
import ViewPDF from 'components/CustomComponents/PDFViewer';
// ---------------- END OF IMPORTS -----------------------

// This is the function that will retreive the file from the S3 storage
async function retreiveFile(fileName) {
  try {
    const user = await Auth.currentAuthenticatedUser();
    const username = user.username;
    const fileKey = `${username}-${fileName}`;

    const result = await Storage.get(fileKey, {
      // download: true,
      level: 'public',
    });

    const response = await fetch(result);
    const arrayBuffer = await response.arrayBuffer();
    const blob = new Blob([arrayBuffer], { type: 'application/pdf' });
    const reader = new FileReader();

    const base64Test = await new Promise((resolve, reject) => {
      reader.onloadend = () => {
        const base64String = reader.result.split(',')[1];
        resolve(base64String);
      };
  
      reader.onerror = () => {
        reject(reader.error);
      };
  
      reader.readAsDataURL(blob);
    });
    console.log('base64Test: ', base64Test);
    return 'data:application/pdf;base64,' + base64Test;


    // const base64String = await pdfToBase64(result);
    // const pdfData = result.Body;
    // const pdfBlob = new Blob([pdfData], { type: 'application/pdf' });
    // const reader = new FileReader();
    // reader.readAsDataURL(pdfBlob);
    // reader.onloadend = () => {
    //   base64String = reader.result.split(',')[1];
    // };

    // console.log('Retrieved file: ', pdfData);
    // console.log('base64String: ', base64String);
    // return base64String;

  } catch (error) {
    console.log('Error listing files: ', error);
  }
}

//Leo's notes, this si the new list File function that search the user's name in the S3 storage,
//This will return a Componenet with a list of files icons that would be used to retrieve file
//will work on retrieve file later.
async function listFiles() {
  try {
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

  useEffect(() => {
    const fetchFiles = async () => {
      const fileList = await listFiles();
      setFiles(fileList);
    };
    fetchFiles();
  }, []);

  const retreivePdfFile = async (file) => {
    const returnedPDF = await retreiveFile(file);
    params.setPDFFile(returnedPDF);
    console.log('returnedPDF: ', returnedPDF)
  };

  return (
    <div>
      {Array.isArray(files) && files.map((file, index) => (
        <Button key={index} onClick={() => retreivePdfFile(file)}>
          {file}
        </Button>
      ))}
    </div>
  );

}



export default function Home(params) {

  const [showFileList, setShowFileList] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [response, setResponse] = useState(null);

  //function to toggle the file list
  const toggleFileList = () => {
    setShowFileList(!showFileList);
  }

  //function to refresh the file list
  const refreshFileList = () => {
    setShowFileList(false);
    setShowFileList(true);
  }

  /* When a user selects a file, it will change the state of the "selectedFile" from empty
     to the name of the file that was selected.  */
  const handleFileChange = async (event) => {
    setSelectedFile(event.target.files[0]);
  };

  /* When the "send file" button gets pressed it will run this function. 
     it will upload the file into the s3 button, if upload is successful, 
     a message that it was successful, otherwise it will return a message 
     with an error */
  //Leo's edit, this new function appends the cognito's username infront of the uploaded file name
  //I tried to get the file to include meta data about the owner but it didn't work so I guess this
  //is the way to go for now, if I uploaded a File called Labreport.pdf
  //it become Leo-Labreport.pdf
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

  document.addEventListener('DOMContentLoaded', () => {
    const fileInput = document.getElementById('file-input');
    const inputFileLabel = document.querySelector('.input-file-label');

    fileInput.addEventListener('change', () => {
      const fileName = fileInput.value.split('\\').pop();
      if (fileName) {
        inputFileLabel.innerHTML = fileName;
      } else {
        inputFileLabel.innerHTML = 'Choose a file...';
      }
    });
  });

  const handleUploadClick = () => {
    const fileInput = document.getElementById('file-input');
    const selectedFile = fileInput.files[0];

    if (selectedFile) {
      uploadFile(selectedFile);
      console.log(selectedFile);
    }
  }

  return (
    <div>
      {/* The navbar that have the navigation routes */}
      <NavigationBar />
      <h1>
        Welcome to Presentee!
      </h1>

      {/* HContianer with everything centered */}
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

      <Button onClick={retreiveFile}> retreive file </Button>

      <Button onClick={toggleFileList}> list files </Button>

      <Button onClick={refreshFileList}> refresh file list </Button>

      {showFileList && <DisplayList setPDFFile={params.setPDFFile} pdfFile={params.pdfFile} />}

      <ViewPDF pdfFile={params.pdfFile} />

    </div>
  );
}