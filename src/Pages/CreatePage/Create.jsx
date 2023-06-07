import React, { useEffect, useState } from "react";
import Button from 'CustomComponents/Button'
import { Auth } from 'aws-amplify';
import { Storage } from "@aws-amplify/storage";
import ViewPDF from 'CustomComponents/PDFViewer';
import { HomeContainer } from "CustomComponents/Containers";

export default function Create(params) {

  // state for the PDF file and response
  const [activePDFFile, setActivePDFFile] = useState(null);
  const [response, setResponse] = useState(null);

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
    console.log({response})
  }

  async function convertToBase64(file) {
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
      reader.readAsDataURL(file);
    });
  
    // add the pdf header to the base64 string
    const base64PDF = 'data:application/pdf;base64,' + base64PDFData;
  
    // return the base64 string
    return base64PDF;
  }
  
  const [fileName, setFileName] = useState('Choose a file...');

  useEffect(() => {
    const fileInput = document.getElementById('file-input');
    const inputFileLabel = document.querySelector('.input-file-label');

    // update the label when a file is selected
    const handleChange = () => {
      const file = fileInput.files[0];
      if (file) {
        const pdfData = convertToBase64(file).then(base64PDF => {
          setActivePDFFile(base64PDF);
          setFileName(file.name);
        }).catch(error => {
          console.error(error);
        });
        inputFileLabel.innerHTML = file.name;
      } else {
        setActivePDFFile(null);
        setFileName('Choose a file...');
        inputFileLabel.innerHTML = 'Choose a file...';
      }
    };

    fileInput.addEventListener('change', handleChange);

  });



  // function to handle the upload button click
  const handleUploadClick = () => {
    const fileInput = document.getElementById('file-input');
    const selectedFile = fileInput.files[0];

    // upload the file if it exists
    if (selectedFile) {
      uploadFile(selectedFile);
    }

    setActivePDFFile(null);
  }

  return (
    <>
      <HomeContainer>
        <div style={{ display: 'flex', justifyContent: 'center', margin: '10px', maxWidth: 'max-width: 1200px' }}>

          <div className="custom-file-input-wrapper">
            <input type="file" id="file-input" className="input-file" />
            <label htmlFor="file-input" className="input-file-label">{fileName}</label>
          </div>

          {/* Button that will send the file to the S3 storage */}
          <Button onClick={handleUploadClick}> Upload Shown File </Button>
        </div>
        <div style={{ width: '100%' }}>
          <h1>Preview</h1>
          <ViewPDF pdfFile={activePDFFile} />
        </div>
      </HomeContainer>

    </>
  );
}

