import React from 'react';
import CreatePollForm from './CreatePollForm';
import DisplayPolls from './DisplayPolls';
import ClientDisplayPolls from './ClientDisplayPolls';




function PollsPage() {

  return (

    <div>
      <h1>Polls Page</h1>
      <CreatePollForm />

      <ClientDisplayPolls />
      <DisplayPolls />
      
    </div>

  );
}
export default PollsPage;