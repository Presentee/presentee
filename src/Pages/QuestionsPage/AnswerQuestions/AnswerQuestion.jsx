import React, { useState } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { createQuestionsAnswer } from '../../../graphql/mutations';

const AnswerQuestion = ({ questionId }) => {
    const [answer, setAnswer] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await API.graphql(graphqlOperation(createQuestionsAnswer, {
                input: {
                    Answer: answer,
                    newquestionsID: questionId
                }
            }));
            setAnswer("");
        } catch (error) {
            console.error("Error creating new answer:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Your Answer..."
                value={answer}
                onChange={e => setAnswer(e.target.value)}
                required
            />
            <button type="submit">Submit Answer</button>
        </form>
    );
};

export default AnswerQuestion;
