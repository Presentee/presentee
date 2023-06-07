import React, { useState } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { createPoll } from './graphql/mutations';

const CreatePollForm = () => {
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState('');

  const handleQuestionChange = (event) => {
    setQuestion(event.target.value);
  };

  const handleOptionsChange = (event) => {
    setOptions(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const poll = {
        question,
        options: options.split(',').map((option) => option.trim()),
      };
      const response = await API.graphql(graphqlOperation(createPoll, { input: poll }));
      console.log('Poll created:', response.data.createPoll);
      // Reset the form fields
      setQuestion('');
      setOptions('');
    } catch (error) {
    console.error('Error creating poll:', error);
}
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Question:
        <input type="text" value={question} onChange={handleQuestionChange} />
      </label>
      <br />
      <label>
        Options (comma-separated):
        <input type="text" value={options} onChange={handleOptionsChange} />
      </label>
      <br />
      <button type="submit">Create Poll</button>
    </form>
  );
};

export default CreatePollForm;
