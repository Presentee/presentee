// components/ProtectSecond.js
import { useAuthenticator, Heading } from '@aws-amplify/ui-react';
import Pdf from './Pdf'

const ProtectedSecond = () => {
  const { route } = useAuthenticator((context) => [context.route]);

  /*
  const message =
    route === 'authenticated' ? 'SECOND PROTECTED ROUTE!' : 'Loading...';
  return <Heading level={1}>{message}</Heading>;
  */
  <Pdf />
}

export default ProtectedSecond;
