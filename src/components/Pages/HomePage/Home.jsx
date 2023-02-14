import React from 'react';
import { 
  MarketingFooter, 
  MarketingPricing,  
  HeroLayout2, 
  Features2x3,
} from 'ui-components'

import NavigationBar from 'components/Navigation';

import Button from 'components/CustomComponents/Button'
import { Storage } from "@aws-amplify/storage"

async function SendTextFile() {
  const result = await Storage.put("testFile", "text.txt");
  console.log(result);
}

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
  return (
    <div>
      {/* The navbar that have the navigation routes */}
      <NavigationBar />
      <h1>
        Welcome to Presentee!

        <Button onClick={SendTextFile}> send file </Button>

        <Button onClick={retreiveFile}> retreive file </Button>

        <Button onClick={listFiles}> list files </Button>

      </h1>
      {/* These are the components that come from amplify pull that are auto generated from Figma */}
      <HeroLayout2 />
      <Features2x3 />
      <MarketingPricing />
      <MarketingFooter />
      
    </div>
  );
}