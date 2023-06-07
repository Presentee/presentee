import React, { useEffect, useState } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { listQuestions, listQuestionsAnswers } from '../../../graphql/queries';

function ClientDisplayQuestions() {
  const [questions, setQuestions] = useState([]);
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [answers, setAnswers] = useState([]);

  

  const fetchQuestions = async () => {
    try {
      const questionsData = await API.graphql(graphqlOperation(listQuestions));
      setQuestions(questionsData.data.listQuestions.items);
    } catch (error) {
      console.error("Error fetching questions:", error);
    }
  }

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchAnswers = async (questionId) => {
    try {
      const answersData = await API.graphql({
        query: listQuestionsAnswers,
        variables: { filter: { newquestionsID: { eq: questionId } } }
      });
      setAnswers(answersData.data.listQuestionsAnswers.items);
    } catch (error) {
      console.error("Error fetching answers:", error);
    }
  }

  const handleShowAnswers = (question) => {
    setSelectedQuestion(question);
    fetchAnswers(question.id);
  }

  return (
    <div>
      {questions.map((question, index) => (
        <div key={index}>
          <h3>{question.Question}</h3>
          <button onClick={() => handleShowAnswers(question)}>Show Answers</button>
        </div>
      ))}
      {selectedQuestion && (
        <div>
          <h4>Answers for: {selectedQuestion.Question}</h4>
          {answers.slice(0, 5).map((answer, index) => (
            <p key={index}>{answer.Answer}</p>
          ))}
        </div>
      )}
    </div>
  );
}

export default ClientDisplayQuestions;
