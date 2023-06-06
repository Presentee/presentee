import React, { useState } from 'react';
import { API } from 'aws-amplify';
import { createPollAnswers as CreatePollAnswerMutation } from './graphql/mutations';

const PollVoting = ({poll}) => {
    const [selectedOption, setSelectedOption] = useState(null);

    const submitVote = async () => {
        if (!selectedOption || !poll.id) {
            console.error("Both a selected option and a poll id are required to submit a vote.");
            return;
        }
        try {
            const newPollAnswer = await API.graphql({
                query: CreatePollAnswerMutation,
                variables: {
                    input: {
                        "Answer": selectedOption,
                        "pollID": poll.id
                    }
                }
            });
            console.log(newPollAnswer);
        } catch (error) {
            console.error("Error submitting vote: ", error);
        }
    };

    return (
        <div>
            <h3>{poll.Question}</h3>
            {JSON.parse(poll.PollJSON).Options.map((option, index) => (
                <div key={index}>
                    <input type="radio" id={option} name={poll.id} value={option}
                        onChange={e => setSelectedOption(e.target.value)}/>
                    <label htmlFor={option}>{option}</label>
                </div>
            ))}
            <button onClick={submitVote}>Submit Vote</button>
        </div>
    );
};

export default PollVoting;
