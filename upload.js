// File: UploadFile.js
import React, { useState } from 'react';
import { S3 } from 'aws-sdk';

const config = {
  bucketName: 'amplify-amplifydemoapp-ampdemo-114114-deployment',
  //to be modified by the user
  albumName: 'my-album',
  region: 'us-west-2',
  // using the localley stored accesskey
  accessKeyId: aws.accessKeyId,
  secretAccessKey: aws.secretAccessKey,
};

const UploadFile = () => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const s3 = new S3({
        region: config.region,
        accessKeyId: config.accessKeyId,
        secretAccessKey: config.secretAccessKey,
      });
      const result = await s3.upload({
        Bucket: config.bucketName,
        Key: `${config.albumName}/${file.name}`,
        Body: file,
        ContentType: file.type,
      }).promise();
      console.log('Uploaded file: ', result);
      setLoading(false);
    } catch (error) {
      console.error('Error uploading file: ', error);
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" onChange={handleChange} />
      <button type="submit" disabled={loading}>
        {loading ? 'Uploading...' : 'Upload'}
      </button>
    </form>
  );
};

export default UploadFile;
