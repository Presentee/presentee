// ----------------- IMPORTS ---------------------------
import React, { useState } from 'react';
import { 
  MarketingFooter, 
  MarketingPricing,  
  HeroLayout2, 
  Features2x3,
} from 'ui-components'

import NavigationBar from 'components/Navigation';

import Button from 'components/CustomComponents/Button'
import { Storage } from "@aws-amplify/storage"
// ---------------- END OF IMPORTS -----------------------


async function retreiveFile() {
  await Storage.get('test.txt', {
    level: 'public'
  });
}

async function listFiles() {
  Storage.list('public/') // for listing ALL files without prefix, pass '' instead
    .then((result) => console.log(result))
    .catch((err) => console.log(err));
}




export default function Home() {

  const [selectedFile, setSelectedFile] = useState(null);
  const [response, setResponse] = useState(null);

  /* When a user selects a file, it will change the state of the "selectedFile" from empty
     to the name of the file that was selected.  */
  const handleFileChange = async (event) => {
    setSelectedFile(event.target.files[0]);
  };

  /* When the "send file" button gets pressed it will run this function. 
     it will upload the file into the s3 button, if upload is successful, 
     a message that it was successful, otherwise it will return a message 
     with an error */
  const uploadFile = async (file) => {
    try {
      await Storage.put(file.name, file, { contentType: file.type });
      setResponse(`Successfuly uploaded ${file.name}!`);
    } catch (error) {
      setResponse(`Error uploading file: ${error}`);
    }
  }
  

  return (
    <div>
      {/* The navbar that have the navigation routes */}
      <NavigationBar />
      <h1>
        Welcome to Presentee!
      </h1>
      
      <div>
        <input type="file" onChange={handleFileChange}/>
        <br></br>
        <Button onClick={() => uploadFile(selectedFile)}> send file </Button>
        {!!response && <div>{response}</div>}
      </div>

        <Button onClick={retreiveFile}> retreive file </Button>

        <Button onClick={listFiles}> list files </Button>

      
      {/* These are the components that come from amplify pull that are auto generated from Figma */}
      <HeroLayout2 />
      <Features2x3 />
      <MarketingPricing />
      <MarketingFooter />
      
    </div>
  );
}