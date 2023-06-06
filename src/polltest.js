import { API } from "aws-amplify";
import { createPoll } from './graphql/mutations';

async function createNewPoll() {
  try {
    const pollDetails = {
      "postID": "a3f4095e-39de-43d2-baf4-f8c16f0f6f4d",
      "PollJSON": JSON.stringify({}), // Provide init commands in this object
      "Answers": []
    };

    const newPoll = await API.graphql({
      query: createPoll,
      variables: { input: pollDetails }
    });
    console.log("New poll created: ", newPoll);
  } catch (err) {
    console.error("Error creating poll: ", err);
  }
}

export default createNewPoll();
