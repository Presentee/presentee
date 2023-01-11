import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import awsExports from './aws-exports';
import { Amplify } from "aws-amplify";
import '@aws-amplify/ui-react/styles.css'
import { AmplifyProvider } from "@aws-amplify/ui-react";

Amplify.configure(awsExports);

ReactDOM.render(
    <AmplifyProvider>
        <App />
    </AmplifyProvider>,
  document.getElementById("root")
);