import React, { useState } from 'react';
import { Storage, API } from 'aws-amplify';

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
      const result = await Storage.put(file.name, file, {
        contentType: file.type
      });
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
