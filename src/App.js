// App.js
import { Authenticator } from '@aws-amplify/ui-react';
import PresenteeRoutes from './components/PresenteeRoutes';

import "./App.css"

const App = () => {
  return (
      <Authenticator.Provider>
        <PresenteeRoutes />
      </Authenticator.Provider>
  );
};

export default App;
