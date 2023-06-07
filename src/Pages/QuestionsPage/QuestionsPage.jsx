import React from 'react';
import DisplayQuestions from './DisplayQuestions/DisplayQuestions';
import ClientDisplayQuestions from './ClientDisplayQuestions/ClientDisplayQuestions';
import AnswerQuestion from './AnswerQuestions/AnswerQuestion';
import CreateQuestion from './CreateQuestion/CreateQuestion';


function QuestionsPage() {

  return (
    <div>
      <h1>Questions Page</h1>
      <CreateQuestion />
      <AnswerQuestion />
      <ClientDisplayQuestions />
      <DisplayQuestions />
      
    </div>
  );
}
export default QuestionsPage;