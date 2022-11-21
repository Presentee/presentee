import React from "react";
 
import { NavBar } from "./ui-components"

import { withAuthenticator, Authenticator } from '@aws-amplify/ui-react';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import awsExports from './aws-exports';
import '@aws-amplify/ui-react/styles.css';

Amplify.configure(awsExports);
 
const App = () => {
  return (
    <div>
      <NavBar />
    </div>
  );
};
 
export default withAuthenticator(App);
