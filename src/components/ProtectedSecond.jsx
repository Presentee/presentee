// components/ProtectSecond.js

import Pdf from './Pdf'

const ProtectedSecond = (params) => {

  /*
  const message =
    route === 'authenticated' ? 'SECOND PROTECTED ROUTE!' : 'Loading...';
  return <Heading level={1}>{message}</Heading>;
  */
  return (
    <div>
      <Pdf pdfFile={params.pdfFile}/>
    </div>
  );
}

export default ProtectedSecond;
