import React, { useState } from 'react';
import { useCreatePresentationButton } from './createPresentationButton';

const CreatePage = ({ setPDFFile, pdfFile }) => {
  const [access, setAccess] = useState('ALL');
  const [dtype, setDtype] = useState('pdf');

  const createPresentationButtonRef = useCreatePresentationButton(access, dtype);

  return (
    <div>
      {/* Add the other elements of the CreatePage component */}
      
      <div>
        <label htmlFor="access">Access:</label>
        <select
          id="access"
          value={access}
          onChange={(e) => setAccess(e.target.value)}
        >
          <option value="ALL">ALL</option>
          <option value="PRIVATE">Private</option>
        </select>
      </div>

      <div>
        <label htmlFor="dtype">File Type:</label>
        <select
          id="dtype"
          value={dtype}
          onChange={(e) => setDtype(e.target.value)}
        >
          <option value="pdf">PDF</option>
          <option value="pptx">PPTX</option>
        </select>
      </div>

      <button ref={createPresentationButtonRef}></button>
    </div>
  );
};

export default CreatePage;
