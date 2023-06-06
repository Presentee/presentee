import React, { useState } from 'react';
import { API } from "aws-amplify";
import { createPoll } from './graphql/mutations';

const CreatePollForm = () => {
  const [question, setQuestion] = useState('');
  const [option1, setOption1] = useState('');
  const [option2, setOption2] = useState('');
  const [option3, setOption3] = useState('');

  const submitForm = async () => {
    const newPoll = await API.graphql({
      query: createPoll,
      variables: {
        input: {
          "PollJSON": JSON.stringify({"Options" : [option1, option2, option3]}),
          "Question": question
        }
      }
    });
    console.log(newPoll); // handle the response as you see fit
  }

  return (
    <div>
      <input type="text" value={question} onChange={e => setQuestion(e.target.value)} placeholder="Question" />
      <input type="text" value={option1} onChange={e => setOption1(e.target.value)} placeholder="Option 1" />
      <input type="text" value={option2} onChange={e => setOption2(e.target.value)} placeholder="Option 2" />
      <input type="text" value={option3} onChange={e => setOption3(e.target.value)} placeholder="Option 3" />
      <button onClick={submitForm}>Submit</button>
    </div>
  );
}

export default CreatePollForm;
