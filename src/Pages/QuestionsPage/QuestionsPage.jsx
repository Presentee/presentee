import React, { useState } from 'react';
import DisplayQuestions from './DisplayQuestions/DisplayQuestions';
import ClientDisplayQuestions from './ClientDisplayQuestions/ClientDisplayQuestions';
import AnswerQuestion from './AnswerQuestions/AnswerQuestion';
import CreateQuestion from './CreateQuestion/CreateQuestion';


function QuestionsPage() {
  const [isPresenter, setIsPresenter] = useState(false);

  const togglePresenter = () => {
    setIsPresenter(!isPresenter);
  }

  return (
    <div>
      <h1>Questions Page</h1>
      
      <button onClick={togglePresenter}>
        {isPresenter ? 'Switch to Viewer Mode' : 'Switch to Presenter Mode'}
      </button>

      {isPresenter ? (
        <>
          <CreateQuestion />
          <AnswerQuestion />
          <DisplayQuestions />
          <ClientDisplayQuestions />
        </>
      ) : (
        <>
          <CreateQuestion />
          <ClientDisplayQuestions />
        </>
      )}
      
    </div>
  );
}

export default QuestionsPage;
