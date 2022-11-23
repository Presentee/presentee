// components/ProtectSecond.js

import Pdf from './Pdf'

const ProtectedSecond = () => {

  /*
  const message =
    route === 'authenticated' ? 'SECOND PROTECTED ROUTE!' : 'Loading...';
  return <Heading level={1}>{message}</Heading>;
  */
  return (
    <div>
      <Pdf />
    </div>
  );
}

export default ProtectedSecond;
