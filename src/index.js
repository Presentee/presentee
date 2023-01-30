import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import Amplify, { Auth } from "aws-amplify";
import '@aws-amplify/ui-react/styles.css'
import { AmplifyProvider } from "@aws-amplify/ui-react";
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);
Auth.configure(awsconfig);

ReactDOM.render(
  <React.StrictMode>
    <AmplifyProvider>
        <App />
    </AmplifyProvider>
  </React.StrictMode>,
  document.getElementById("root")
);