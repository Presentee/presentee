import React, { useEffect, useState } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { onCreateQuestions, onDeleteQuestions, onCreateQuestionsAnswer } from './graphql/subscriptions';
import { listQuestions, listQuestionsAnswers } from './graphql/queries';
import { deleteQuestions, deleteQuestionsAnswer } from './graphql/mutations';
import CreateQuestion from './CreateQuestion';
import AnswerQuestion from './AnswerQuestion';

const DisplayQuestions = () => {
  const [questions, setQuestions] = useState([]);
  const [showAnswers, setShowAnswers] = useState({});

  useEffect(() => {
    fetchQuestions();
    subscribeToNewQuestions();
    subscribeToDeletedQuestions();
    subscribeToNewAnswers();
  });

  const fetchQuestions = async () => {
    try {
      const questionsData = await API.graphql(graphqlOperation(listQuestions, {
        limit: 1000
      }));
      const questionsWithAnswers = await Promise.all(
        questionsData.data.listQuestions.items.map(async question => {
          const answersData = await API.graphql(graphqlOperation(listQuestionsAnswers, {
            filter: {
              newquestionsID: {
                eq: question.id
              }
            },
            limit: 5
          }));
          return {
            ...question,
            QuestionsAnswers: answersData.data.listQuestionsAnswers.items
          };
        })
      );
      setQuestions(questionsWithAnswers);
    } catch (error) {
      console.error("Error fetching questions:", error);
    }
  };

  const subscribeToNewQuestions = async () => {
    API.graphql(
      graphqlOperation(onCreateQuestions)
    ).subscribe({
      next: () => {
        fetchQuestions();
      }
    });
  }

  const subscribeToDeletedQuestions = async () => {
    API.graphql(
      graphqlOperation(onDeleteQuestions)
    ).subscribe({
      next: () => {
        fetchQuestions();
      }
    });
  }

  const subscribeToNewAnswers = async () => {
    API.graphql(
      graphqlOperation(onCreateQuestionsAnswer)
    ).subscribe({
      next: () => {
        fetchQuestions();
      }
    });
  }

  const resetQuestions = async () => {
    try {
      // Deleting all answers first
      for (let question of questions) {
        for (let answer of question.QuestionsAnswers) {
          await API.graphql(graphqlOperation(deleteQuestionsAnswer, {
            input: {
              id: answer.id
            }
          }));
        }
      }

      // Then deleting all questions
      for (let question of questions) {
        await API.graphql(graphqlOperation(deleteQuestions, {
          input: {
            id: question.id
          }
        }));
      }

      // Fetching questions again to refresh the list
      fetchQuestions();
    } catch (error) {
      console.error("Error resetting questions:", error);
    }
  };

  const toggleAnswers = (questionId) => {
    setShowAnswers(prevState => ({ ...prevState, [questionId]: !prevState[questionId] }));
  };

  return (
    <div>
      <h2>Questions</h2>
      <CreateQuestion />
      <button onClick={resetQuestions}>Reset Questions</button>
      {questions.map((question, index) => (
        <div key={index}>
          <h3>{question.Question}</h3>
          <button onClick={() => toggleAnswers(question.id)}>
            {showAnswers[question.id] ? "Hide Answers" : "Show Answers"}
          </button>
          <AnswerQuestion questionId={question.id} />
          {showAnswers[question.id] && (
            question.QuestionsAnswers.length > 0 ?
              <ul>
                {question.QuestionsAnswers.map((answer, index) => (
                  <li key={index}>{answer.Answer}</li>
                ))}
              </ul>
            :
              <p>Unanswered</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default DisplayQuestions;
