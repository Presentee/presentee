import React from 'react';
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
    <>
      <h1>
        Welcome to Presentee!

        <Button onClick={SendTextFile}> send file </Button>

        <Button onClick={retreiveFile}> retreive file </Button>

        <Button onClick={listFiles}> list files </Button>

      </h1>
    </>
  );
}