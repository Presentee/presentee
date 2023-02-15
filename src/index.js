import { Authenticator } from '@aws-amplify/ui-react';
import { Amplify, Storage } from 'aws-amplify';
import ReactDOM from 'react-dom';

import App from './App';

import '@aws-amplify/ui-react/styles.css';

import aws_exports from './aws-exports';

Amplify.configure(aws_exports);
Storage.configure(aws_exports);

ReactDOM.render(
    <Authenticator.Provider>
      <App />
    </Authenticator.Provider>,
  document.getElementById("root")
);