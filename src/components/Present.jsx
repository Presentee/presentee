import Pdf from './Pdf'
import React from 'react'
import VContainer from './VContainer';
import Presentations from './Presentations';
import { useNavigate } from 'react-router-dom';
import Button from './Button';

const Present = (params) => {

  const navigate = useNavigate();

  return (
    <>
      <VContainer>
        <Presentations />
      </VContainer>
      <VContainer style={{ width: 800, height: 800 }}>
        <Button onClick={() => navigate('/presenting')}> Present Presentation </Button>
        <Pdf pdfFile={params.pdfFile} />
      </VContainer>
    </>
  );
}

export default Present;
