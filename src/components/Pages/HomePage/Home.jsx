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
import { Auth } from 'aws-amplify'; // import the Auth module from aws-amplify
// ---------------- END OF IMPORTS -----------------------


async function retreiveFile() {
  await Storage.get('test.txt', {
    level: 'public'
  });
}
//Leo's notes, this si the new list File function that search the user's name in the S3 storage,
//This will return a Componenet with a list of files icons that would be used to retrieve file
//will work on retrieve file later.
async function listFiles() {
  try {
    const user = await Auth.currentAuthenticatedUser();
    const username = user.username;
    const fileList = await Storage.list(`public/${username}-`);
    const files = fileList.map((file) => file.key);

    // Create an array of objects containing the file name and the corresponding icon
    const fileIcons = files.map((file) => {
      const extension = file.split('.').pop().toLowerCase();
      const icon = getIconForExtension(extension);
      return { file, icon };
    });

    // Render the list of files with icons
    return (
      <div className="file-list">
        {fileIcons.map((item) => (
          <div className="file-item">
            <i className={`fa fa-${item.icon}`}></i>
            <span>{item.file}</span>
          </div>
        ))}
      </div>
    );

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