import React, { useEffect, useState } from "react";
import Button from 'CustomComponents/Button'
import { Auth, DataStore } from 'aws-amplify';
import { Storage } from "@aws-amplify/storage";
import ViewPDF from 'CustomComponents/PDFViewer';
import { HomeContainer } from "CustomComponents/Containers";
import BlobToByte64 from "CustomComponents/BlobToByte64";
import { Presentation } from "models";

export default function Create(params) {

  // state for the PDF
  const [activePDFFile, setActivePDFFile] = useState(null);

  // state for the file name
  const [fileName, setFileName] = useState('Choose a file...');

  // function to upload a file to S3
  const uploadFile = async (file) => {
    try {
      const user = await Auth.currentAuthenticatedUser(); // get the current authenticated user
      const fileKey = `${user.username}-${file.name}`;
      await Storage.put(fileKey, file, { contentType: file.type });

      // generate a unique short code
      const uniqueShortCode = await generateUniqueShortCode();

      try {
        // create the presentation in datastore
        const response = await DataStore.save(
          new Presentation({
            "PresentationKey": fileKey,
            "Name": file.name,
            "PageNum": 0,
            "ShortCode": uniqueShortCode
          })
        );
      } catch (error) {
        console.error("Error creating presentation: ", error);
      }


    } catch (error) {
      console.error("Error handling presentation: ", error);
    }
  }

  async function generateUniqueShortCode() {
    // try to generate a unique short code 5 times
    for (let i = 0; i < 5; i++) {
      const initialShortCode = GeneratedCode();

      // check if the code already exists
      try {
        const presentations = await DataStore.query(Presentation, (c) => c.ShortCode.eq(initialShortCode));
        if (presentations.length === 0) {
          return initialShortCode;
        }
      }
      catch (error) {
        console.error("An error occurred while checking the code: ", error);
      }
    }
    console.error("Unable to generate a unique code");
  }

  // function to generate a random 6 character code
  function GeneratedCode() {
    let shortCode = "";
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

    // generate a random 6 character code
    for (let i = 0; i < 6; i++) {
      shortCode += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return shortCode;
  }

  useEffect(() => {
    const fileInput = document.getElementById('file-input');
    const inputFileLabel = document.querySelector('.input-file-label');

    const handleChange = () => {

      // get the file from the input and check if it exists
      const file = fileInput.files[0];
      if (file) {

        // convert the file to base64
        BlobToByte64(file).then(base64PDF => {

          // set the active PDF file to the base64 string
          setActivePDFFile(base64PDF);
          setFileName(file.name);
        }).catch(error => {
          console.error(error);
        });

        // set the file name 
        inputFileLabel.innerHTML = file.name;
      } else {

        // reset the file name so it doesn't show the previous file name
        setActivePDFFile(null);
        setFileName('Choose a file...');
        inputFileLabel.innerHTML = 'Choose a file...';
      }
    };

    // add the event listener that will handle the file selection
    fileInput.addEventListener('change', handleChange);
  });



  // function to handle the upload button click
  const handleUploadClick = () => {
    const selectedFile = document.getElementById('file-input').files[0];

    // upload the file if it exists
    if (selectedFile) {
      uploadFile(selectedFile);


    }

    // reset the file name and active PDF file
    setActivePDFFile(null);
    setFileName('Success! Choose another file...');
  }

  return (
    <>
      <HomeContainer>
        <div style={{ display: 'flex', justifyContent: 'center', margin: '10px', maxWidth: 'max-width: 1200px' }}>

          <div className="custom-file-input-wrapper">
            <input type="file" id="file-input" className="input-file" />
            <label htmlFor="file-input" className="input-file-label" style={{backgroundColor: 'inherit', border: '1px solid'}}>{fileName}</label>
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

