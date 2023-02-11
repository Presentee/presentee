import React from 'react'
import { useNavigate } from 'react-router-dom';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

import './Present.css';
import Presentations from './Presentations';

import VContainer from 'components/CustomComponents/Containers';
import Button from 'components/CustomComponents/Button';
import ViewPDF from 'components/CustomComponents/PDFViewer';
import NavigationBar from 'components/Navigation';


export default function Present(params) {

  const navigate = useNavigate();

  return (
    <>
      <NavigationBar />
      <Presentations />
      <Button onClick={() => navigate('/presenting')}> Present Presentation </Button>
      <VContainer style={{ width: '100%', height: '100%', padding: '2px'}}>
      <ViewPDF pdfFile={params.pdfFile} />
      </VContainer>
    </>
  );
}
