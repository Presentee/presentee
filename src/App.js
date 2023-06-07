import React, { useEffect } from "react";
import { Amplify, API, graphqlOperation } from 'aws-amplify';
import awsconfig from './aws-exports';
//import CreatePollForm from './createpoll.js'; // replace with your actual path
import CreatePollForm from './createpolltest.js';
import DisplayPolls from './displaypoll.js';
import ClientDisplayPolls from './ClientDisplayPolls.js'
import DisplayQuestions from './DisplayQuestions.js'
import ClientDisplayQuestions from './ClientDisplayQuestions.js'

function App() {
  return (
    <div className="App">
      <h1>Create a new Poll</h1>
      <CreatePollForm />
      <h1>All Polls</h1>
      <DisplayQuestions />
    </div>
  );
}

export default App;


