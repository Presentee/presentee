import { Authenticator } from '@aws-amplify/ui-react';
import { Amplify, Storage } from 'aws-amplify';
import ReactDOM from 'react-dom';
import {createRoot} from 'react-dom';

import App from './App';

import '@aws-amplify/ui-react/styles.css';

import aws_exports from './aws-exports';

Amplify.configure(aws_exports);
Storage.configure(aws_exports);

const container = document.getElementById('app');
const root = createRoot(container);
root.render(
  <Authenticator.Provider>
      <App />
  </Authenticator.Provider>
);