import React, { useState } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { createQuestions } from '../../../graphql/mutations';
import "./general.css"
const CreateQuestion = () => {
  const [newQuestion, setNewQuestion] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await API.graphql(graphqlOperation(createQuestions, {
        input: {
          Question: newQuestion
        }
      }));
      setNewQuestion('');
    } catch (error) {
      console.error('Error creating new question:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="newQuestion">Create a new question:</label>
        <input
          id="newQuestion"
          value={newQuestion}
          onChange={event => setNewQuestion(event.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateQuestion;