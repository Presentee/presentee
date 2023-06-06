import React, { useEffect, useState } from 'react';
import { API, graphqlOperation } from "aws-amplify";
import { listPolls, listPollAnswers } from "./graphql/queries";
import { deletePoll } from "./graphql/mutations";
import { onCreatePoll } from "./graphql/subscriptions";

const DisplayPolls = () => {
  const [polls, setPolls] = useState([]);
  const [results, setResults] = useState({});

  useEffect(() => {
    fetchPolls();
    subscribeToNewPolls();
  }, []);

  const fetchPolls = async () => {
    const allPolls = await API.graphql({
      query: listPolls
    });
    setPolls(allPolls.data.listPolls.items);
  }

  const displayResults = async (pollId) => {
    try {
        const pollAnswers = await API.graphql({
            query: listPollAnswers,
            variables: {
                filter: { pollID: { eq: pollId } }
            }
        });

        const answerCounts = pollAnswers.data.listPollAnswers.items.reduce((counts, answer) => {
            counts[answer.Answer] = (counts[answer.Answer] || 0) + 1;
            return counts;
        }, {});

        setResults(prevResults => ({
          ...prevResults,
          [pollId]: answerCounts,
        }));
    } catch (error) {
        console.error("Error fetching poll answers: ", error);
    }
  }

  const subscribeToNewPolls = async () => {
    API.graphql(
      graphqlOperation(onCreatePoll)
    ).subscribe({
      next: (eventData) => {
        const newPoll = eventData.value.data.onCreatePoll;
        setPolls(prevPolls => [newPoll, ...prevPolls]);
      }
    });
  }

  const resetPolls = async () => {
    setPolls([]); // Clear displayed polls immediately
    setResults({}); // Clear results immediately

    // Deleting each poll one by one
    for (let i = 0; i < polls.length; i++) {
      await API.graphql({
        query: deletePoll,
        variables: { input: { id: polls[i].id } }
      });
    }
    
    // fetch the polls again to update the state
    fetchPolls();
  }

  return (
    <div>
      <button onClick={resetPolls}>Reset</button>
      {polls.map((poll, index) => (
        <div key={index}>
          <h3>{poll.Question}</h3>
          <p>{JSON.parse(poll.PollJSON).Options.join(', ')}</p>
          <button onClick={() => displayResults(poll.id)}>Display Results</button>
          {results[poll.id] && (
            <ul>
              {Object.entries(results[poll.id]).map(([answer, count], index) => (
                <li key={index}>{answer}: {count}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}

export default DisplayPolls;
