import React, { useState } from 'react';
import CreatePollForm from './CreatePollForm';
import DisplayPolls from './DisplayPolls';
import ClientDisplayPolls from './ClientDisplayPolls';

function PollsPage() {
  const [isPresenter, setIsPresenter] = useState(false);

  const togglePresenter = () => {
    setIsPresenter(!isPresenter);
  }

  return (
    <div>
      <h1>Polls Page</h1>
      
      <button onClick={togglePresenter}>
        {isPresenter ? 'Switch to Viewer Mode' : 'Switch to Presenter Mode'}
      </button>

      {isPresenter ? (
        <>
          <CreatePollForm />
          <DisplayPolls />
        </>
      ) : (
        <ClientDisplayPolls />
      )}
      
    </div>
  );
}

export default PollsPage;
