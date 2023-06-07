import React, { useEffect, useState } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { listPolls } from './graphql/queries';
import PollVoting from './PollVoting';

function ClientDisplayPolls() {
  const [polls, setPolls] = useState([]);

  useEffect(() => {
    fetchPolls();
  }, []);

  const fetchPolls = async () => {
    try {
      const pollsData = await API.graphql(graphqlOperation(listPolls));
      setPolls(pollsData.data.listPolls.items);
    } catch (error) {
      console.error("Error fetching polls:", error);
    }
  }

  return (
    <div>
      {polls.map((poll, index) => (
        <PollVoting key={index} poll={poll} />
      ))}
    </div>
  );
}

export default ClientDisplayPolls;
